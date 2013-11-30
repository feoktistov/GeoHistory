package models

import org.squeryl.KeyedEntity
import collection.immutable.Vector

/**
 * Created with IntelliJ IDEA.
 * User: enzo
 * Date: 30.11.13
 * Time: 20:13
 * To change this template use File | Settings | File Templates.
 */
class GeoRelation extends GeoValue {
  var firstSide : String  = ""
  var secondSide : String = ""

  var direction : Int = 0

  override def fromStringVector( vector : Vector[String] ) = {
    var index = super.fromStringVector(vector)

    if (!vector(index).isEmpty) direction = vector(index).toInt
    index += 1


    if (!vector(index).isEmpty) firstSide = vector(index)
    index += 1

    if (!vector(index).isEmpty) secondSide = vector(index)
    index += 1

    index
  }
}
