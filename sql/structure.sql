--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.11
-- Dumped by pg_dump version 9.5.11

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: coach; Type: TABLE; Schema: public; Owner: leagueroster
--

CREATE TABLE coach (
    id integer NOT NULL,
    team_id integer,
    first_name text,
    last_name text
);


ALTER TABLE coach OWNER TO leagueroster;

--
-- Name: coach_id_seq; Type: SEQUENCE; Schema: public; Owner: leagueroster
--

CREATE SEQUENCE coach_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE coach_id_seq OWNER TO leagueroster;

--
-- Name: coach_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leagueroster
--

ALTER SEQUENCE coach_id_seq OWNED BY coach.id;


--
-- Name: league; Type: TABLE; Schema: public; Owner: leagueroster
--

CREATE TABLE league (
    id integer NOT NULL,
    organization_id integer,
    name text
);


ALTER TABLE league OWNER TO leagueroster;

--
-- Name: league_id_seq; Type: SEQUENCE; Schema: public; Owner: leagueroster
--

CREATE SEQUENCE league_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE league_id_seq OWNER TO leagueroster;

--
-- Name: league_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leagueroster
--

ALTER SEQUENCE league_id_seq OWNED BY league.id;


--
-- Name: organization; Type: TABLE; Schema: public; Owner: leagueroster
--

CREATE TABLE organization (
    id integer NOT NULL,
    name text,
    active boolean
);


ALTER TABLE organization OWNER TO leagueroster;

--
-- Name: organization_id_seq; Type: SEQUENCE; Schema: public; Owner: leagueroster
--

CREATE SEQUENCE organization_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE organization_id_seq OWNER TO leagueroster;

--
-- Name: organization_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leagueroster
--

ALTER SEQUENCE organization_id_seq OWNED BY organization.id;


--
-- Name: season; Type: TABLE; Schema: public; Owner: leagueroster
--

CREATE TABLE season (
    id integer NOT NULL,
    league_id integer,
    name text
);


ALTER TABLE season OWNER TO leagueroster;

--
-- Name: season_id_seq; Type: SEQUENCE; Schema: public; Owner: leagueroster
--

CREATE SEQUENCE season_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE season_id_seq OWNER TO leagueroster;

--
-- Name: season_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leagueroster
--

ALTER SEQUENCE season_id_seq OWNED BY season.id;


--
-- Name: season_team; Type: TABLE; Schema: public; Owner: leagueroster
--

CREATE TABLE season_team (
    id integer NOT NULL,
    season_id integer,
    team_id integer
);


ALTER TABLE season_team OWNER TO leagueroster;

--
-- Name: season_team_id_seq; Type: SEQUENCE; Schema: public; Owner: leagueroster
--

CREATE SEQUENCE season_team_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE season_team_id_seq OWNER TO leagueroster;

--
-- Name: season_team_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leagueroster
--

ALTER SEQUENCE season_team_id_seq OWNED BY season_team.id;


--
-- Name: team; Type: TABLE; Schema: public; Owner: leagueroster
--

CREATE TABLE team (
    id integer NOT NULL,
    league_id integer,
    name text
);


ALTER TABLE team OWNER TO leagueroster;

--
-- Name: team_id_seq; Type: SEQUENCE; Schema: public; Owner: leagueroster
--

CREATE SEQUENCE team_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE team_id_seq OWNER TO leagueroster;

--
-- Name: team_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leagueroster
--

ALTER SEQUENCE team_id_seq OWNED BY team.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: leagueroster
--

ALTER TABLE ONLY coach ALTER COLUMN id SET DEFAULT nextval('coach_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: leagueroster
--

ALTER TABLE ONLY league ALTER COLUMN id SET DEFAULT nextval('league_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: leagueroster
--

ALTER TABLE ONLY organization ALTER COLUMN id SET DEFAULT nextval('organization_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: leagueroster
--

ALTER TABLE ONLY season ALTER COLUMN id SET DEFAULT nextval('season_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: leagueroster
--

ALTER TABLE ONLY season_team ALTER COLUMN id SET DEFAULT nextval('season_team_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: leagueroster
--

ALTER TABLE ONLY team ALTER COLUMN id SET DEFAULT nextval('team_id_seq'::regclass);


--
-- Name: coach_pkey; Type: CONSTRAINT; Schema: public; Owner: leagueroster
--

ALTER TABLE ONLY coach
    ADD CONSTRAINT coach_pkey PRIMARY KEY (id);


--
-- Name: league_pkey; Type: CONSTRAINT; Schema: public; Owner: leagueroster
--

ALTER TABLE ONLY league
    ADD CONSTRAINT league_pkey PRIMARY KEY (id);


--
-- Name: organization_pkey; Type: CONSTRAINT; Schema: public; Owner: leagueroster
--

ALTER TABLE ONLY organization
    ADD CONSTRAINT organization_pkey PRIMARY KEY (id);


--
-- Name: season_pkey; Type: CONSTRAINT; Schema: public; Owner: leagueroster
--

ALTER TABLE ONLY season
    ADD CONSTRAINT season_pkey PRIMARY KEY (id);


--
-- Name: season_team_pkey; Type: CONSTRAINT; Schema: public; Owner: leagueroster
--

ALTER TABLE ONLY season_team
    ADD CONSTRAINT season_team_pkey PRIMARY KEY (id);


--
-- Name: team_pkey; Type: CONSTRAINT; Schema: public; Owner: leagueroster
--

ALTER TABLE ONLY team
    ADD CONSTRAINT team_pkey PRIMARY KEY (id);


--
-- Name: coach_team_id_idx; Type: INDEX; Schema: public; Owner: leagueroster
--

CREATE INDEX coach_team_id_idx ON coach USING btree (team_id);


--
-- Name: league_organization_id_idx; Type: INDEX; Schema: public; Owner: leagueroster
--

CREATE INDEX league_organization_id_idx ON league USING btree (organization_id);


--
-- Name: season_league_id_idx; Type: INDEX; Schema: public; Owner: leagueroster
--

CREATE INDEX season_league_id_idx ON season USING btree (league_id);


--
-- Name: season_team_season_id_idx; Type: INDEX; Schema: public; Owner: leagueroster
--

CREATE INDEX season_team_season_id_idx ON season_team USING btree (season_id);


--
-- Name: season_team_team_id_idx; Type: INDEX; Schema: public; Owner: leagueroster
--

CREATE INDEX season_team_team_id_idx ON season_team USING btree (team_id);


--
-- Name: team_league_id_idx; Type: INDEX; Schema: public; Owner: leagueroster
--

CREATE INDEX team_league_id_idx ON team USING btree (league_id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

