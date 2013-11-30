package models

import org.squeryl.KeyedEntity

/**
 * Created with IntelliJ IDEA.
 * User: enzo
 * Date: 30.11.13
 * Time: 14:30
 * To change this template use File | Settings | File Templates.
 */
case class GeoObject(var name : String = "Default object") extends KeyedEntity[Long]{
  var id : Long = 0L
}
