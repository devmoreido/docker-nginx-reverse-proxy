create table task (
  id int not null auto_increment,
  description varchar(100) not null,
  isDone boolean not null,
  primary key (id)
);