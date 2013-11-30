package models;

import com.google.gdata.client.spreadsheet.SpreadsheetService;
import com.google.gdata.data.spreadsheet.ListEntry;
import com.google.gdata.data.spreadsheet.ListFeed;
import com.google.gdata.data.spreadsheet.SpreadsheetEntry;
import com.google.gdata.data.spreadsheet.SpreadsheetFeed;

import java.net.URL;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: enzo
 * Date: 30.11.13
 * Time: 19:17
 * To change this template use File | Settings | File Templates.
 */
public class FetchSpreadsheet {
    public static void fetch() {

        {
             try {
                SpreadsheetService service =
                        new SpreadsheetService("MySpreadsheetIntegration-v1");

                service.setUserCredentials("artem.feoktistov@wakeupstudios.com", "");
                // TODO: Authorize the service object for a specific user (see other sections)

                // Define the URL to request.  This should never change.
                URL SPREADSHEET_FEED_URL = new URL("https://spreadsheets.google.com/feeds/worksheets/tk1BLU4bIKd9V0ZYjB-qFZA/private/full");

                // Make a request to the API and get all spreadsheets.
                SpreadsheetFeed feed = service.getFeed(SPREADSHEET_FEED_URL, SpreadsheetFeed.class);
                List<SpreadsheetEntry> spreadsheets = feed.getEntries();

                // Iterate through all of the spreadsheets returned
                for (SpreadsheetEntry spreadsheet : spreadsheets) {

                    // Print the title of this spreadsheet to the screen

                    System.out.println(spreadsheet.getWorksheetFeedUrl());

                    ListFeed lf = service.getFeed(spreadsheet.getDefaultWorksheet().getListFeedUrl(), ListFeed.class);
                    for (ListEntry row : lf.getEntries()) {
                        // Print the first column's cell value
                        System.out.print(row.getTitle().getPlainText() + "\t");
                        // Iterate over the remaining columns, and print each cell value
                        for (String tag : row.getCustomElements().getTags()) {
                            System.out.print(row.getCustomElements().getValue(tag) + "\t");
                        }
                        System.out.println();
                    }

                    System.out.println(spreadsheet.getDefaultWorksheet().getListFeedUrl());

                    System.out.println(spreadsheet.getTitle().getPlainText());
                }
            }  catch (Exception e) {

            }
        }
    }

}
