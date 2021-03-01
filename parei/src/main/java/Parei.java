
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Parei {

    private static final String[] DATA = {
        //
        "2021-03-01 11:21:55.312", "2021-03-01 10:48:17.321"
    };
    private static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
    private static final NumberFormat NUMBER_PERCENT = new DecimalFormat("00.00");
    private static final NumberFormat NUMBER_DIFF = new DecimalFormat("0000000000");

    public static void main(String... args) throws Exception {
        if (Parei.DATA.length < 2) {
            if (Parei.DATA.length == 1) {
                long now = System.currentTimeMillis();
                long last = Parei.DATE_FORMAT.parse(Parei.DATA[0]).getTime();
                System.out.println("Ultimo: " + Parei.DATE_FORMAT.format(last) + " > Passou " + Parei.formatLongToTime(now - last) + "," + " Agora: \"" + Parei.DATE_FORMAT.format(now) + "\",");
            }
            System.out.println("Sem dados para calculo!");
        } else {
            // Agora
            long now = System.currentTimeMillis();
            // definir quantidade maxima de registros
            int size = 200;
            // reduzir
            Arrays.sort(Parei.DATA, (String time1, String time2) -> time2.compareTo(time1));
            List<Long> data = new ArrayList<>();
            for (int i = 0; i < Parei.DATA.length && i < size; i++) {
                data.add(Parei.DATE_FORMAT.parse(Parei.DATA[i]).getTime());
            }
            // redefinido quantidade maxima de registros de acordo com o que tinha
            size = data.size();
            // pegar o ultimo
            long last = data.get(0);
            // Pegar proximo data e tempo a expirar
            long expire = data.get(size - 1);
            long expireDiff = data.get(size - 2) - expire;
            // calcular media
            long media = (last - expire) / size;
            // calcular mediana e ultima diferença
            String[] diffs = new String[data.size() - 1];
            for (int i = 0; i < diffs.length; i++) {
                diffs[i] = Parei.NUMBER_DIFF.format(data.get(i) - data.get(i + 1)) + " " + data.get(i);
            }
            Arrays.sort(diffs);
            long mediana;
            String medianaReff;
            if (diffs.length % 2 == 0) {
                mediana = (Parei.NUMBER_DIFF.parse(diffs[(diffs.length / 2) - 1].split(" ")[0]).longValue() + Parei.NUMBER_DIFF.parse(diffs[diffs.length / 2].split(" ")[0]).longValue()) / 2;
                medianaReff = " (" + Parei.DATE_FORMAT.format(Long.valueOf(diffs[(diffs.length / 2) - 1].split(" ")[1])) + " e " + Parei.DATE_FORMAT.format(Long.valueOf(diffs[diffs.length / 2].split(" ")[1])) + ")";
            } else {
                mediana = Parei.NUMBER_DIFF.parse(diffs[(diffs.length - 1) / 2].split(" ")[0]).longValue();
                medianaReff = " (" + Parei.DATE_FORMAT.format(Long.valueOf(diffs[(diffs.length - 1) / 2].split(" ")[1])) + ")";
            }
            // Quantidade de dias usadas no calculo
            double days = ((double) last - expire) / (24 * 60 * 60 * 1000);
            // Quantidade de dias médio por carteira
            double boxDays = ((double) days) / ((double) data.size() / 20);
            // Mostrar resultado
            System.out.println("Ultimo: " + Parei.DATE_FORMAT.format(last) + " > Passou " + Parei.formatLongToTime(now - last) + "," + " Agora: \"" + Parei.DATE_FORMAT.format(now) + "\",");
            System.out.println();
            System.out.println("Media  : " + Parei.formatDiff(now, last, media));
            System.out.println("Mediana: " + Parei.formatDiff(now, last, mediana) + medianaReff);
            System.out.println("Expirar: " + Parei.formatDiff(now, last, expireDiff) + " (" + Parei.DATE_FORMAT.format(expire) + ")");
            System.out.println();
            System.out.println("Calculado: " + size + " registros nos ultimos " + Parei.NUMBER_PERCENT.format(days).replace(",", ".") + " dias > Uma cateira a cada " + Parei.NUMBER_PERCENT.format(boxDays).replace(",", ".") + " dias.");
        }
    }

    private static String formatDiff(long now, long last, long diff) {
        String formatted = Parei.DATE_FORMAT.format(last + diff) + " > ";
        if ((last + diff) > now) {
            long part = (last + diff - now);
            formatted = formatted + "Faltam " + Parei.NUMBER_PERCENT.format(((double) 100 * part) / diff).replace(",", ".") + "%: " + Parei.formatLongToTime(part) + " de " + Parei.formatLongToTime(diff);
        } else {
            long part = (now - last - diff);
            formatted = formatted + "Passou " + Parei.NUMBER_PERCENT.format(((double) 100 * part) / diff).replace(",", ".") + "%: " + Parei.formatLongToTime(diff) + " + " + Parei.formatLongToTime(part);
        }
        return formatted;
    }

    private static String formatLongToTime(long diff) {
        String formatted = "";
        long temp = diff;
        long mod = temp % 1000;
        formatted = mod + formatted;
        while (formatted.length() < 3) {
            formatted = "0" + formatted;
        }
        formatted = "." + formatted;
        temp = (temp - mod) / 1000;
        mod = temp % 60;
        formatted = mod + formatted;
        while (formatted.length() < 6) {
            formatted = "0" + formatted;
        }
        formatted = ":" + formatted;
        temp = (temp - mod) / 60;
        mod = temp % 60;
        formatted = mod + formatted;
        while (formatted.length() < 9) {
            formatted = "0" + formatted;
        }
        formatted = ":" + formatted;
        temp = (temp - mod) / 60;
        formatted = temp + formatted;
        while (formatted.length() < 12) {
            formatted = "0" + formatted;
        }
        return formatted;
    }
}
