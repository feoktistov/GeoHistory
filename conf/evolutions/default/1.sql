# --- First database schema

# --- !Ups

create sequence s_geo_object_id;

create table GeoObject (
  id    bigint DEFAULT nextval('s_geo_object_id'),
  name  varchar(128)
);


# --- !Downs

drop table GeoObject;
drop sequence s_geo_object_id;