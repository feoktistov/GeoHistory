package models

import org.squeryl.{Table, Schema}

/**
 * Created with IntelliJ IDEA.
 * User: enzo
 * Date: 30.11.13
 * Time: 14:29
 * To change this template use File | Settings | File Templates.
 */

object GeoHistDb extends Schema {
    var geoObjects = table[GeoObject]("GeoObject")
    var geoRelations = table[GeoRelation]("GeoRelation")
    var geoValue = table[GeoValue]("GeoValue")
    var geoCustom = table[GeoCustom]("GeoCustom")

  def contstructObject(vector : Vector[String]) = {
    if (vector.length > 9 && !vector(9).isEmpty) {
      val r = new GeoRelation()
      r.fromStringVector(vector)
      r
    } else if (vector.length > 7 && !vector(7).isEmpty) {
      val r = new GeoValue()
      r.fromStringVector(vector)
      r
    } else {
      val r = new GeoObject()
      r.fromStringVector(vector)
      r
    }

  }

}
