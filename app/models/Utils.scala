package models

import java.sql.Timestamp
import java.util.Calendar

/**
 * Created with IntelliJ IDEA.
 * User: enzo
 * Date: 30.11.13
 * Time: 20:05
 * To change this template use File | Settings | File Templates.
 */
object Time {
  val SEC = 1000L
  val MIN = SEC * 60L
  val HOUR = MIN * 60L
  val ONE_DAY = 24L * HOUR

  val Beginning = new Timestamp(0)

  def now = {
    val date = new java.util.Date()
    new Timestamp(date.getTime)
  }

  def fromYes(year : Int) = {
    val c = Calendar.getInstance()
    c.set(year, 0, 0, 0, 0)
    new java.sql.Timestamp(c.getTime().getTime)
  }

  def before(period: Long) = after(-period)

  def after(period: Long) = {
    val now = new java.util.Date()
    new java.sql.Timestamp(now.getTime + period)
  }
}

