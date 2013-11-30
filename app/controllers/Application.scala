package controllers

import play.api._
import data.Form
import libs.json.Json
import play.api.mvc._

import play.api.data.Forms.{mapping, text, optional}

import org.squeryl.PrimitiveTypeMode._
import models.{GeoHistDb, GeoObject}


object Application extends Controller {

  val loadFileForm = Form(
    mapping(
      "name" -> text
    )(GeoObject.apply)(GeoObject.unapply)
  )

  def index = Action {
    Ok(views.html.map_intro(loadFileForm))
  }

  def addDataFileUrl = Action { implicit request =>
    loadFileForm.bindFromRequest.value map { obj =>
      inTransaction(GeoHistDb.geoObjects insert obj)
      Redirect(routes.Application.index())
    } getOrElse BadRequest
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