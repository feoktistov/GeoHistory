package models;

/**
 * Created with IntelliJ IDEA.
 * User: enzo
 * Date: 30.11.13
 * Time: 15:14
 * To change this template use File | Settings | File Templates.
 */


import java.io.IOException;
import java.net.URL;

import com.google.gdata.client.spreadsheet.SpreadsheetService;
import com.google.gdata.data.spreadsheet.CustomElementCollection;
import com.google.gdata.data.spreadsheet.ListEntry;
import com.google.gdata.data.spreadsheet.ListFeed;
import com.google.gdata.util.ServiceException;

public class SpreadsheetFetch {
    public static void getSpeardSheat(String urlString) {
        SpreadsheetService service = new SpreadsheetService("com.banshee");
        try {
            // Notice that the url ends
            // with default/public/values.
            // That wasn't obvious (at least to me)
            // from the documentation.
            urlString = "https://spreadsheets.google.com/feeds/list/0AsaDhyyXNaFSdDJ2VUxtVGVWN1Yza1loU1RPVVU3OFE/default/public/values";

            // turn the string into a URL
            URL url = new URL(urlString);

            // You could substitute a cell feed here in place of
            // the list feed
            ListFeed feed = service.getFeed(url, ListFeed.class);

            for (ListEntry entry : feed.getEntries()) {
                CustomElementCollection elements = entry.getCustomElements();
                String name = elements.getValue("name");
                System.out.println(name);
                String number = elements.getValue("Number");
                System.out.println(number);
            }
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ServiceException e) {
            e.printStackTrace();
        }

    }
}
public class SpreadsheatFetch {
}
