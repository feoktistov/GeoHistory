package controllers

import play.api._
import data.Form
import libs.json.Json
import play.api.mvc._

import play.api.data.Forms.{mapping, text, optional}

import org.squeryl.PrimitiveTypeMode._
import models._
import com.google.gson.Gson


object Application extends Controller {

  var files  = List[String]()

  def index = Action {
    Ok(views.html.map_intro())
  }

  def upl = Action {
    Ok.sendFile(new java.io.File("/tmp/fileToServe.pdf"))
  }

  def showUpload = Action {
    Ok(views.html.upload())
  }

  def showContent = Action {
    if(files.isEmpty) {
      Redirect(routes.Application.index).flashing(
        "error" -> "No uploaded files"
      )
    } else {
      var data = CSV.fromFile("/tmp/" + files(0))
      var str = ""
      data.foreach( s => {
        str += GeoHistDb.contstructObject(s).getClass
        str += "\n"
      } )

      Ok("File uploaded " + str)
    }
  }

  def getJsonFromFile(filename : String) = {
    val data = CSV.fromFile("/tmp/" + filename)


    var list = List[GeoObject]()

    data.splitAt(1)._2.foreach( s => {
      list = list :+ GeoHistDb.contstructObject(s)
    } )

    list = list.filter(p => {
      p match {
        case p : GeoValue => {
          p.value != 0
        }
        case _ => false
      }
    }).splitAt(50)._1

    val gson = new Gson()

    gson.toJson(list.toArray)
  }

  def upload = Action(parse.multipartFormData) { request =>
    request.body.file("picture").map { picture =>
      import java.io.File
      val filename = picture.filename
      files = files :+ filename
      val contentType = picture.contentType
      if( contentType.get.contains("csv") ) {
        picture.ref.moveTo(new File("/tmp/" + filename),true)


        Ok("File uploaded ")
      } else {
        Redirect(routes.Application.index).flashing(
          "error" -> "Wrong file format"
        )
      }

    }.getOrElse {
      Redirect(routes.Application.index).flashing(
        "error" -> "Missing file"
      )
    }
  }

  def startPresentation(fileName : String) = Action{
    Ok(views.html.map(getJsonFromFile(fileName)))
  }

  def getFiles = Action {
    val json = inTransaction {
      val geoObjects = from(GeoHistDb.geoObjects)(obj =>
        select(obj)
      )
      var results = ""
      geoObjects.foreach( m => {
        results += m.name
        results += "\n"
      })
      results
    }
    Ok(json)
  }
  
}