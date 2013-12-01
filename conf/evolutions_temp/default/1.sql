# --- First database schema

# --- !Ups

create sequence s_geo_object_id;
create sequence s_geo_rel_id;
create sequence s_geo_val_id;
create sequence s_geo_cust_id;

create table GeoObject (
  id    bigint DEFAULT nextval('s_geo_object_id'),
  name  varchar(128),
  time  timestamp,
    filter varchar(256),
    color varchar(128),
    userData varchar(128),
    lat real,
    lng real
);

create table GeoRelation (
  id    bigint DEFAULT nextval('s_geo_rel_id'),
  name  varchar(128),
  time  timestamp,
  filter varchar(256),
  color varchar(128),
  userData varchar(128),
  lat real,
  lng real,
  firstObjectId bigint,
  secondObjectId bigint,
  relationType int,
  direction int,
  value real
);

create table GeoValue (
  id    bigint DEFAULT nextval('s_geo_val_id'),
  name  varchar(128),
  time  timestamp,
  filter varchar(256),
  color varchar(128),
  userData varchar(128),
  lat real,
  lng real,

  value real
);

create table GeoCustom (
  id    bigint DEFAULT nextval('s_geo_cust_id'),
  name  varchar(128),
  time  timestamp,
  filter varchar(256),
  color varchar(128),
  userData varchar(128),
  lat real,
  lng real,


  objectType int,
  timeEnd timestamp

);


# --- !Downs

drop table GeoObject;
drop sequence s_geo_object_id;
drop sequence s_geo_rel_id;
drop sequence s_geo_val_id;
drop sequence s_geo_cust_id;