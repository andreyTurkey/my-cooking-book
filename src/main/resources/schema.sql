drop table IF EXISTS users CASCADE;
drop table IF EXISTS authorities CASCADE;

CREATE TABLE IF NOT EXISTS users(
                      username varchar_ignorecase(50) not null primary key,
                      password varchar_ignorecase(50) not null,
                      enabled boolean not null
);

CREATE TABLE IF NOT EXISTS authorities (
                             username varchar_ignorecase(50) not null,
                             authority varchar_ignorecase(50) not null,
                             constraint fk_authorities_users foreign key(username) references users(username)
);
create unique index IF NOT EXISTS ix_auth_username on authorities (username, authority);
