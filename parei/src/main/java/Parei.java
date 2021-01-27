
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.TreeMap;

public class Parei {

    private static final String[] DATA = {
        "2021-01-27 13:49:06.383", "2021-01-27 12:11:52.105",
        //
        "2021-01-27 10:12:52.253", "2021-01-27 00:49:44.130", "2021-01-26 23:58:37.663", "2021-01-26 23:36:51.435", "2021-01-26 22:58:43.700",
        "2021-01-26 22:24:56.565", "2021-01-26 21:24:26.469", "2021-01-26 19:47:37.063", "2021-01-26 18:08:52.380", "2021-01-26 15:35:44.090",
        "2021-01-26 13:57:03.674", "2021-01-26 12:02:32.867", "2021-01-26 09:48:58.895", "2021-01-26 01:39:41.344", "2021-01-26 00:04:10.655",
        "2021-01-25 22:27:27.682", "2021-01-25 20:49:33.938", "2021-01-25 19:12:38.730", "2021-01-25 17:37:19.147", "2021-01-25 15:57:15.878",
        //
        "2021-01-25 04:04:18.419", "2021-01-25 03:50:33.303", "2021-01-25 03:40:08.587", "2021-01-25 03:30:50.378", "2021-01-25 03:18:58.596",
        "2021-01-25 03:06:41.059", "2021-01-25 02:26:41.059", "2021-01-25 01:46:24.539", "2021-01-25 00:43:21.624", "2021-01-24 23:19:37.695",
        "2021-01-24 20:02:44.579", "2021-01-24 19:31:54.182", "2021-01-24 18:38:08.206", "2021-01-24 17:50:27.586", "2021-01-24 17:34:55.918",
        "2021-01-24 17:09:33.956", "2021-01-24 16:37:50.486", "2021-01-24 16:16:17.871", "2021-01-24 15:22:39.405", "2021-01-24 14:36:33.623",
        //
        "2021-01-24 13:36:33.623", "2021-01-24 13:06:33.623", "2021-01-24 12:36:33.623", "2021-01-24 12:06:33.623", "2021-01-24 11:36:33.623",
        "2021-01-24 11:06:33.623", "2021-01-24 09:36:33.623", "2021-01-24 08:06:33.623", "2021-01-24 06:36:33.623", "2021-01-24 05:06:33.623",
        "2021-01-24 03:36:33.623", "2021-01-24 02:06:33.623", "2021-01-24 00:36:33.623", "2021-01-23 23:06:33.623", "2021-01-23 21:36:33.623",
        "2021-01-23 20:36:33.623", "2021-01-23 19:06:33.623", "2021-01-23 17:36:33.623", "2021-01-23 16:06:33.623", "2021-01-23 14:36:33.623",
        //
        "2021-01-23 12:05:11.347", "2021-01-23 11:48:40.801", "2021-01-23 11:31:14.924", "2021-01-23 11:13:45.553", "2021-01-23 10:47:49.000",
        "2021-01-23 07:47:49.000", "2021-01-23 04:47:49.000", "2021-01-23 01:54:06.202", "2021-01-23 00:22:58.506", "2021-01-22 23:09:07.750",
        "2021-01-22 22:33:32.175", "2021-01-22 22:04:45.545", "2021-01-22 21:34:08.405", "2021-01-22 19:25:01.506", "2021-01-22 18:47:47.312",
        "2021-01-22 17:55:44.194", "2021-01-22 17:02:17.906", "2021-01-22 16:08:30.089", "2021-01-22 14:30:16.795", "2021-01-22 13:47:30.116",
        //
        "2021-01-22 12:08:45.048", "2021-01-22 11:44:36.887", "2021-01-22 09:44:27.482", "2021-01-22 07:44:27.482", "2021-01-22 05:44:27.482",
        "2021-01-22 01:31:02.179", "2021-01-22 01:02:36.938", "2021-01-21 23:18:46.806", "2021-01-21 22:47:44.363", "2021-01-21 22:22:13.247",
        "2021-01-21 21:58:47.437", "2021-01-21 21:13:36.156", "2021-01-21 20:49:11.405", "2021-01-21 20:05:06.228", "2021-01-21 19:24:48.069",
        "2021-01-21 18:43:03.213", "2021-01-21 17:35:58.089", "2021-01-21 17:15:47.115", "2021-01-21 16:48:53.051", "2021-01-21 15:22:26.774",
        //
        "2021-01-21 13:06:49.486", "2021-01-21 12:32:44.561", "2021-01-21 11:57:11.764", "2021-01-21 11:07:50.030", "2021-01-21 10:09:30.842",
        "2021-01-21 09:58:56.730", "2021-01-21 09:48:22.238", "2021-01-21 09:33:34.112", "2021-01-21 01:13:30.528", "2021-01-21 00:58:45.314",
        "2021-01-20 23:52:52.268", "2021-01-20 23:07:24.910", "2021-01-20 22:36:19.499", "2021-01-20 21:47:47.111", "2021-01-20 20:04:27.269",
        "2021-01-20 18:17:55.141", "2021-01-20 16:31:07.773", "2021-01-20 15:41:46.336", "2021-01-20 14:24:37.416", "2021-01-20 13:04:14.168",
        //
        "2021-01-20 12:46:02.671", "2021-01-20 11:58:27.002", "2021-01-20 11:22:19.967", "2021-01-20 10:50:31.551", "2021-01-20 09:46:08.178",
        "2021-01-20 09:35:32.108", "2021-01-20 09:09:43.628", "2021-01-19 23:28:36.431", "2021-01-19 22:11:12.442", "2021-01-19 21:40:53.785",
        "2021-01-19 21:07:22.106", "2021-01-19 20:39:16.933", "2021-01-19 19:38:27.194", "2021-01-19 18:42:53.349", "2021-01-19 18:05:25.188",
        "2021-01-19 17:28:05.423", "2021-01-19 16:27:59.610", "2021-01-19 15:46:50.439", "2021-01-19 14:40:26.716", "2021-01-19 12:49:30.823",
        //
        "2021-01-19 11:17:03.822", "2021-01-19 10:37:07.818", "2021-01-19 09:56:08.900", "2021-01-19 03:56:08.900", "2021-01-19 01:11:30.971",
        "2021-01-19 00:43:19.523", "2021-01-19 00:04:27.469", "2021-01-18 22:55:37.044", "2021-01-18 22:30:52.020", "2021-01-18 21:30:52.020",
        "2021-01-18 21:00:52.020", "2021-01-18 20:11:27.414", "2021-01-18 19:40:36.133", "2021-01-18 19:12:03.193", "2021-01-18 18:09:33.020",
        "2021-01-18 17:40:15.632", "2021-01-18 16:44:17.376", "2021-01-18 15:44:02.297", "2021-01-18 15:00:05.502", "2021-01-18 14:24:49.837",
        //
        "2021-01-18 12:30:34.519", "2021-01-18 11:59:27.715", "2021-01-18 11:19:34.536", "2021-01-18 10:29:27.198", "2021-01-18 09:56:47.047",
        "2021-01-18 00:30:41.532", "2021-01-17 22:38:06.505", "2021-01-17 20:31:53.157", "2021-01-17 18:35:58.779", "2021-01-17 16:47:29.397",
        "2021-01-17 14:52:29.222", "2021-01-17 03:17:11.021", "2021-01-17 02:49:13.324", "2021-01-17 02:32:54.271", "2021-01-17 02:24:38.523",
        "2021-01-17 01:59:43.178", "2021-01-17 01:22:10.606", "2021-01-17 00:36:03.953", "2021-01-16 23:56:03.953", "2021-01-16 23:13:03.953",
        //
        "2021-01-16 22:50:25.584", "2021-01-16 22:20:25.584", "2021-01-16 21:20:25.584", "2021-01-16 20:47:16.529", "2021-01-16 20:30:16.529",
        "2021-01-16 20:18:16.529", "2021-01-16 19:04:58.140", "2021-01-16 18:31:01.317", "2021-01-16 17:56:26.314", "2021-01-16 17:06:09.756",
        "2021-01-16 16:37:03.444", "2021-01-16 16:15:39.554", "2021-01-16 15:42:30.843", "2021-01-16 15:00:15.018", "2021-01-16 14:34:39.600",
        "2021-01-16 13:58:10.929", "2021-01-16 13:16:11.630", "2021-01-16 13:02:35.725", "2021-01-16 12:54:13.404", "2021-01-16 12:39:13.404",
        //
        "2021-01-16 12:28:23.694", "2021-01-16 02:29:06.342", "2021-01-16 01:40:01.768", "2021-01-16 01:07:35.655", "2021-01-16 00:36:08.883",
        "2021-01-16 00:00:41.895", "2021-01-15 23:24:04.340", "2021-01-15 22:22:18.312", "2021-01-15 21:31:35.836", "2021-01-15 20:54:27.423",
        "2021-01-15 20:16:26.477", "2021-01-15 19:35:36.644", "2021-01-15 18:35:34.261", "2021-01-15 18:00:16.995", "2021-01-15 16:46:51.386",
        "2021-01-15 15:55:29.988", "2021-01-15 14:45:29.988", "2021-01-15 14:02:35.914", "2021-01-15 13:13:32.516", "2021-01-15 12:04:04.479",
        //
        "2021-01-15 11:17:00.594", "2021-01-15 10:51:48.378", "2021-01-15 10:12:10.557", "2021-01-15 09:26:19.310", "2021-01-15 03:34:21.413",
        "2021-01-15 02:50:13.974", "2021-01-15 02:25:02.627", "2021-01-15 00:44:12.001", "2021-01-15 00:06:48.809", "2021-01-14 23:44:01.298",
        "2021-01-14 23:13:03.080", "2021-01-14 23:04:45.848", "2021-01-14 18:20:42.558", "2021-01-14 18:05:41.183", "2021-01-14 17:06:36.547",
        "2021-01-14 16:45:49.763", "2021-01-14 16:07:32.308", "2021-01-14 15:44:33.000", "2021-01-14 15:23:33.000", "2021-01-14 15:08:27.443",
        //
        "2021-01-14 14:40:45.193", "2021-01-14 13:51:06.434", "2021-01-14 12:51:04.953", "2021-01-14 12:41:26.656", "2021-01-14 12:10:44.596",
        "2021-01-14 11:42:12.963", "2021-01-14 11:04:01.529", "2021-01-14 00:54:54.256", "2021-01-14 00:23:15.890", "2021-01-13 23:50:21.437",
        "2021-01-13 23:07:52.904", "2021-01-13 22:52:51.787", "2021-01-13 22:13:54.030", "2021-01-13 21:50:06.238", "2021-01-13 21:14:49.393",
        "2021-01-13 20:30:52.790", "2021-01-13 19:40:48.084", "2021-01-13 19:17:03.165", "2021-01-13 18:42:02.283", "2021-01-13 18:14:30.649",
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
            long now = System.currentTimeMillis();
            long last = Parei.makeDatabase(1).lastKey();
            Result r050 = Parei.proccess(now, last, 50);
            Result r100 = Parei.proccess(now, last, 100);
            Result r200 = Parei.proccess(now, last, 200);
            Result r400 = Parei.proccess(now, last, 400);
            System.out.println("Ultimo: " + Parei.DATE_FORMAT.format(last) + " > Passou " + Parei.formatLongToTime(now - last) + "," + " Agora: \"" + Parei.DATE_FORMAT.format(now) + "\",");
            System.out.println();
            System.out.println("Maior  50: " + Parei.formatDiff(now, last, r050.max));
            System.out.println("Maior 100: " + Parei.formatDiff(now, last, r100.max));
            System.out.println("Maior 200: " + Parei.formatDiff(now, last, r200.max));
            System.out.println("Maior 400: " + Parei.formatDiff(now, last, r400.max));
            System.out.println();
            System.out.println("Media  50: " + Parei.formatDiff(now, last, r050.media));
            System.out.println("Media 100: " + Parei.formatDiff(now, last, r100.media));
            System.out.println("Media 200: " + Parei.formatDiff(now, last, r200.media));
            System.out.println("Media 400: " + Parei.formatDiff(now, last, r400.media));
            System.out.println();
            System.out.println("Metade  50: " + Parei.formatDiff(now, last, r050.metade));
            System.out.println("Metade 100: " + Parei.formatDiff(now, last, r100.metade));
            System.out.println("Metade 200: " + Parei.formatDiff(now, last, r200.metade));
            System.out.println("Metade 400: " + Parei.formatDiff(now, last, r400.metade));
            System.out.println();
            System.out.println("Mediana  50: " + Parei.formatDiff(now, last, r050.mediana));
            System.out.println("Mediana 100: " + Parei.formatDiff(now, last, r100.mediana));
            System.out.println("Mediana 200: " + Parei.formatDiff(now, last, r200.mediana));
            System.out.println("Mediana 400: " + Parei.formatDiff(now, last, r400.mediana));
            System.out.println();
            System.out.println("Menor  50: " + Parei.formatDiff(now, last, r050.min));
            System.out.println("Menor 100: " + Parei.formatDiff(now, last, r100.min));
            System.out.println("Menor 200: " + Parei.formatDiff(now, last, r200.min));
            System.out.println("Menor 400: " + Parei.formatDiff(now, last, r400.min));
            System.out.println();
            System.out.println("Usados  50:  " + r050.size + " registros nos ultimos " + Parei.NUMBER_PERCENT.format(r050.days).replace(",", ".") + " dias > Uma cateira a cada " + Parei.NUMBER_PERCENT.format(r050.qtdBox).replace(",", ".") + " dias ou " + Parei.NUMBER_PERCENT.format(r050.qtdItens).replace(",", ".").replace("00", "0") + " por dia.");
            System.out.println("Usados 100: " + r100.size + " registros nos ultimos " + Parei.NUMBER_PERCENT.format(r100.days).replace(",", ".") + " dias > Uma cateira a cada " + Parei.NUMBER_PERCENT.format(r100.qtdBox).replace(",", ".") + " dias ou " + Parei.NUMBER_PERCENT.format(r100.qtdItens).replace(",", ".").replace("00", "0") + " por dia.");
            System.out.println("Usados 200: " + r200.size + " registros nos ultimos " + Parei.NUMBER_PERCENT.format(r200.days).replace(",", ".") + " dias > Uma cateira a cada " + Parei.NUMBER_PERCENT.format(r200.qtdBox).replace(",", ".") + " dias ou " + Parei.NUMBER_PERCENT.format(r200.qtdItens).replace(",", ".").replace("00", "0") + " por dia.");
            System.out.println("Usados 400: " + r400.size + " registros nos ultimos " + Parei.NUMBER_PERCENT.format(r400.days).replace(",", ".") + " dias > Uma cateira a cada " + Parei.NUMBER_PERCENT.format(r400.qtdBox).replace(",", ".") + " dias ou " + Parei.NUMBER_PERCENT.format(r400.qtdItens).replace(",", ".").replace("00", "0") + " por dia.");
        }
    }

    public static Result proccess(long now, long last, int size) throws Exception {
        TreeMap<Long, Long> data = Parei.makeDatabase(size);
        long first = data.firstKey();
        long max = Parei.getMaximo(data);
        long min = Parei.getMinimo(data);
        long media = Parei.getMedia(data);
        long mediana = Parei.getMediana(data);
        double days = ((double) now - first) / (24 * 60 * 60 * 1000);
        return new Result(max, media, (media + mediana) / 2, mediana, min, data.size(), days, 20 * (days / data.size()), 1 / (20 * (days / data.size())));
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

class Result {

    public final long max;
    public final long media;
    public final long metade;
    public final long mediana;
    public final long min;
    public final int size;
    public final double days;
    public final double qtdBox;
    public final double qtdItens;

    public Result(long max, long media, long metade, long mediana, long min, int size, double days, double qtdBox, double qtdItens) {
        this.max = max;
        this.media = media;
        this.metade = metade;
        this.mediana = mediana;
        this.min = min;
        this.size = size;
        this.days = days;
        this.qtdBox = qtdBox;
        this.qtdItens = qtdItens;
    }
}
