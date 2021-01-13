
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.TreeMap;

public class Parei {

    private static final String[] DATA = {
        "2021-01-13 18:14:30.649",
        //
        "2021-01-13 16:57:12.987", "2021-01-13 16:13:20.084", "2021-01-13 15:15:00.686", "2021-01-13 15:00:00.686", "2021-01-13 14:45:00.686",
        "2021-01-13 14:24:50.377", "2021-01-13 13:21:02.711", "2021-01-13 12:12:20.583", "2021-01-13 11:26:51.230", "2021-01-13 01:54:11.622",
        "2021-01-13 01:30:00.114", "2021-01-13 00:57:18.455", "2021-01-13 00:25:42.386", "2021-01-12 23:46:24.886", "2021-01-12 22:48:13.809",
        "2021-01-12 21:45:31.796", "2021-01-12 19:28:48.827", "2021-01-12 17:13:22.062", "2021-01-12 14:58:03.946", "2021-01-12 12:13:59.101",
        //
        "2021-01-12 10:00:39.018", "2021-01-12 02:41:38.425", "2021-01-12 00:19:00.325", "2021-01-11 21:08:24.861", "2021-01-11 17:33:28.334",
        "2021-01-11 14:30:03.220", "2021-01-11 11:28:06.168", "2021-01-11 08:03:32.501", "2021-01-11 03:42:43.536", "2021-01-11 00:49:44.146",
        "2021-01-10 21:58:02.394", "2021-01-10 15:34:45.724", "2021-01-10 12:52:09.547", "2021-01-10 10:12:31.714", "2021-01-10 02:25:55.600",
        "2021-01-09 23:52:16.673", "2021-01-09 21:23:27.817", "2021-01-09 18:55:47.106", "2021-01-09 16:28:46.768", "2021-01-09 13:57:54.859",
        //
        "2021-01-09 11:35:27.332", "2021-01-09 01:20:08.335", "2021-01-08 23:02:34.251", "2021-01-08 20:49:53.692", "2021-01-08 18:37:00.871",
        "2021-01-08 16:25:38.926", "2021-01-08 14:09:42.310", "2021-01-08 11:57:37.043", "2021-01-08 09:44:53.860", "2021-01-08 01:56:47.770",
        "2021-01-07 23:39:04.831", "2021-01-07 21:35:53.748", "2021-01-07 19:31:40.186", "2021-01-07 17:31:19.453", "2021-01-07 15:23:05.911",
        "2021-01-07 13:22:25.227", "2021-01-07 11:23:38.840", "2021-01-07 01:46:47.631", "2021-01-06 23:42:14.196", "2021-01-06 21:43:47.836",
        //
        "2021-01-06 19:39:31.818", "2021-01-06 17:27:20.166", "2021-01-06 15:16:42.615", "2021-01-06 13:13:44.769", "2021-01-06 11:12:16.735",
        "2021-01-06 09:15:40.128", "2021-01-06 01:03:46.873", "2021-01-05 23:05:18.661", "2021-01-05 21:06:08.678", "2021-01-05 19:14:13.124",
        "2021-01-05 17:22:14.553", "2021-01-05 15:30:38.312", "2021-01-05 13:36:09.467", "2021-01-05 11:43:05.433", "2021-01-05 09:45:42.501",
        "2021-01-05 01:13:01.987", "2021-01-04 23:16:19.813", "2021-01-04 21:12:24.878", "2021-01-04 19:17:23.528", "2021-01-04 17:21:13.084",
        //
        "2021-01-04 15:05:52.317", "2021-01-04 06:33:01.751", "2021-01-04 00:33:01.751", "2021-01-04 00:01:26.959", "2021-01-03 23:43:36.719",
        "2021-01-03 22:37:30.812", "2021-01-03 21:32:51.793", "2021-01-03 21:10:41.999", "2021-01-03 20:39:40.801", "2021-01-03 20:17:11.551",
        "2021-01-03 19:32:58.614", "2021-01-03 19:00:58.614", "2021-01-03 18:55:45.820", "2021-01-03 17:52:59.280", "2021-01-03 17:29:56.832",
        "2021-01-03 16:52:19.581", "2021-01-03 16:25:57.769", "2021-01-03 16:00:46.634", "2021-01-03 15:23:08.593", "2021-01-03 15:03:33.782",
        //
        "2021-01-03 13:32:53.177", "2021-01-03 11:59:58.630", "2021-01-03 10:39:04.983", "2021-01-03 09:19:32.560", "2021-01-03 08:00:19.482",
        "2021-01-03 06:40:50.071", "2021-01-03 00:02:14.661", "2021-01-02 22:48:30.222", "2021-01-02 21:30:32.723", "2021-01-02 20:20:02.902",
        "2021-01-02 19:13:59.130", "2021-01-02 17:35:01.252", "2021-01-02 16:24:42.351", "2021-01-02 15:08:47.760", "2021-01-02 13:51:17.625",
        "2021-01-02 02:40:30.711", "2021-01-02 01:45:12.953", "2021-01-02 00:52:44.083", "2021-01-01 23:58:44.113", "2021-01-01 23:14:03.501"
    };
    private static final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
    private static final NumberFormat NUMBER_PERCENT = new DecimalFormat("00.00");

    public static void main(String... args) throws Exception {
        if (Parei.DATA.length == 0) {
            System.out.println("Sem dados para calculo!");
        } else {
            TreeMap<Long, Long> data = Parei.makeDatabase(600);
            long now = System.currentTimeMillis();
            long first = data.firstKey();
            long last = data.lastKey();
            long max = Parei.getMaximo(data);
            long min = Parei.getMinimo(data);
            long media = Parei.getMedia(data);
            long mediana = Parei.getMediana(data);
            double days = ((double) now - first) / (24 * 60 * 60 * 1000);
            System.out.println("Ultimo:  " + Parei.DATE_FORMAT.format(last) + " > Passou " + Parei.formatLongToTime(now - last) + "," + " Agora: \"" + Parei.DATE_FORMAT.format(now) + "\",");
            //System.out.println("Maior:   " + Parei.formatDiff(now, last, max));
            System.out.println("Media:   " + Parei.formatDiff(now, last, media));
            System.out.println("Metade:  " + Parei.formatDiff(now, last, (media + mediana) / 2));
            System.out.println("Mediana: " + Parei.formatDiff(now, last, mediana));
            //System.out.println("Menor:   " + Parei.formatDiff(now, last, min));
            System.out.println("Usados: " + data.size() + " registros nos ultimos " + Parei.NUMBER_PERCENT.format(days).replace(",", ".") + " dias > Uma cateira a cada " + Parei.NUMBER_PERCENT.format(20 * (days / data.size())).replace(",", ".") + " dias ou " + Parei.NUMBER_PERCENT.format(1 / (20 * (days / data.size()))).replace(",", ".").replace("00", "0") + " por dia.");
        }
    }

    private static TreeMap<Long, Long> makeDatabase(int size) throws Exception {
        Arrays.sort(Parei.DATA);
        TreeMap<Long, Long> data = new TreeMap<>();
        Long last = null;
        for (String time : Parei.DATA) {
            Long actual = Parei.DATE_FORMAT.parse(time).getTime();
            if (last == null) {
                data.put(actual, 0L);
            } else {
                data.put(actual, actual - last);
            }
            last = actual;
        }
        while (data.size() > size) {
            data.remove(data.firstKey());
        }
        return data;
    }

    private static Long getMaximo(TreeMap<Long, Long> data) {
        Long max = data.firstEntry().getValue();
        for (Long key : data.keySet()) {
            Long value = data.get(key);
            if (value > max) {
                max = value;
            }
        }
        return max;
    }

    private static Long getMinimo(TreeMap<Long, Long> data) {
        Long min = data.firstEntry().getValue();
        for (Long key : data.keySet()) {
            Long value = data.get(key);
            if (value < min || min == 0) {
                min = value;
            }
        }
        return min;
    }

    private static long getMedia(TreeMap<Long, Long> data) {
        Long sum = 0L;
        for (Long key : data.keySet()) {
            sum = sum + data.get(key);
        }
        return (sum / data.size());
    }

    private static long getMediana(TreeMap<Long, Long> data) {
        Long[] diffs = data.values().toArray(new Long[0]);
        Arrays.sort(diffs);
        if (diffs.length == 0) {
            return 0;
        } else if (diffs.length % 2 == 0) {
            return (diffs[(diffs.length / 2) - 1] + diffs[diffs.length / 2]) / 2;
        } else {
            return diffs[(diffs.length - 1) / 2];
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
