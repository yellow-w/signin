use JWTuser;

create table user(
    useridx INT AUTO_INCREMENT NOT NULL,
    userid VARCHAR(10) NOT NULL,
    userpw VARCHAR(10) NOT NULL,
    userlevel CHAR(1) DEFAULT 3 NOT NULL,
    active CHAR(1) DEFAULT 1 NOT NULL,
    PRIMARY KEY (useridx),
    UNIQUE KEY (userid)
);

INSERT INTO user(userid,userpw) VALUES ('web7722','1234');
INSERT INTO user(userid,userpw,userlevel) VALUES ('admin','admin','3');