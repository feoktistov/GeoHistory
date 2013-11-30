package models

import java.io.InputStream

import io.Source
import com.google.gdata.data.projecthosting.Uri
import com.google.gdata.client.spreadsheet.{SpreadsheetQuery, SpreadsheetService}
import com.google.gdata.data.spreadsheet.{SpreadsheetEntry, SpreadsheetFeed}
import java.net.URL

/**
 * Created with IntelliJ IDEA.
 * User: enzo
 * Date: 30.11.13
 * Time: 17:38
 * To change this template use File | Settings | File Templates.
 */
object DocFetch {
     def getDoc() {

       try {

         val service = new SpreadsheetService("com.wakeupstudios")

         service.setUserCredentials("testgc2@wakeupstudios.com", "InAppTest12345")

         val sheetListUrl = new URL("https://spreadsheets.google.com/feeds/spreadsheets/private/full")

        // val query = new SpreadsheetQuery(sheetListUrl)
        // query.setTitleQuery("costs")

         val feed =  service.getFeed(sheetListUrl, classOf[SpreadsheetFeed])

         var enrtis = feed.getEntries


         System.out.println( feed.getEntries.get(0).getTitle())
         //System.out.println( feed.getEntries.get(0).getWorksheets.get(0) )





       } catch {
         case e: Exception => println(e.printStackTrace())
       } finally {

       }
     }
}
