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
}
