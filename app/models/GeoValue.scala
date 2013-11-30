package models

import collection.immutable.Vector

/**
 * Created with IntelliJ IDEA.
 * User: enzo
 * Date: 30.11.13
 * Time: 20:28
 * To change this template use File | Settings | File Templates.
 */
class GeoValue extends GeoObject{
  var value : Float = 0

  var objectType : String = ""

  override def fromStringVector( vector : Vector[String] ) = {
    var index = super.fromStringVector(vector)

    if (!vector(index).isEmpty) objectType = vector(index)
    index += 1

    if (!vector(index).isEmpty) value = vector(index).toFloat
    index += 1

    index
  }
}
