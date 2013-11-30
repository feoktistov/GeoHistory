import sbt._
import Keys._
import play.Project._

object ApplicationBuild extends Build {

  val appName         = "GeoHist"
  val appVersion      = "1.0-SNAPSHOT"

  val appDependencies = Seq(
    // Add your project dependencies here,
    jdbc,
    anorm,
    "postgresql" % "postgresql" % "9.1-901-1.jdbc4",
    "org.squeryl" % "squeryl_2.10.0-RC1" % "0.9.5-3"
  )


  val main = play.Project(appName, appVersion, appDependencies).settings(
    // Add your own project settings here      
  )

}
