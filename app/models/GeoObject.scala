package models

import org.squeryl.KeyedEntity
import java.sql.Timestamp
import collection.immutable.Vector

/**
 * Created with IntelliJ IDEA.
 * User: enzo
 * Date: 30.11.13
 * Time: 14:30
 * To change this template use File | Settings | File Templates.
 */
class GeoObject extends KeyedEntity[Long] {
  var id : Long = 0L
  var name : String = "Default object"
  var time : Timestamp = Time.now
  var filter : String = ""
  var color : String = "#FF0000"
  var userData : String = ""
  var lat : Double = 0
  var lng : Double = 0

  def fromStringVector( vector : Vector[String] ) = {
    var index = 0
    if (!vector(index).isEmpty) name = vector(index)
    index += 1

    if (!vector(index).isEmpty) lat = vector(index).toDouble
    index += 1

    if (!vector(index).isEmpty) lng = vector(index).toDouble
    index += 1

    if (!vector(index).isEmpty) time = Time.fromYes(vector(index).toInt)
    index += 1

    if (!vector(index).isEmpty) filter = vector(index)
    index += 1

    if (!vector(index).isEmpty) color = vector(index)
    index += 1

    if (!vector(index).isEmpty) userData = vector(index)
    index += 1

    index
  }
}
