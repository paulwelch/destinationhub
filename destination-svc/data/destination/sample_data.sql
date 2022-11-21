--
-- PostgreSQL database dump
--

-- Dumped from database version 12.8 (Ubuntu 12.8-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.8 (Ubuntu 12.8-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: Image; Type: TABLE DATA; Schema: public; Owner: keystone
--

COPY public."Image" (id, filename) FROM stdin;
cksgyu4fd0168gkm0qzmaxeyu	Seattle-Washington.jpeg
cksgyupko0344gkm07ecusmbc	Miami.jpg
cksgyuzmt0520gkm0eo8w0dxs	phoenix.jpg
cksgyv9x60696gkm04guawvmk	sandiego.jpeg
\.


--
-- Data for Name: State; Type: TABLE DATA; Schema: public; Owner: keystone
--

COPY public."State" (id, code, name, capital, "largestCity", population, "areaSqMi", "landAreaSqMi", "waterAreaSqMi") FROM stdin;
cksgvqldk0112lum03hcmcvi0	WA	Washington	Olympia	Seattle	123123123	123123123	32132132	232323
cksgvrknr0213lum0dlgse0ed	CA	California	\N	Los Angeles	123123123	12312332	32121	3212
cksgvs2fp0314lum07e4swrr0	TX	Texas	\N	\N	123123123	123123123	12312332	123321
cksgvskpc0415lum0sykzodd0	AZ	Arizona	\N	Phoenix	123123123	\N	\N	\N
cksgvsua90516lum0nm9lneho	FL	Florida	\N	\N	\N	\N	\N	\N
\.


--
-- Data for Name: Location; Type: TABLE DATA; Schema: public; Owner: keystone
--

COPY public."Location" (id, name, state, city, status, description, "createdDate", "shortDescription") FROM stdin;
cksgvxiek1328lum0zdxzypre	Miami Metro	cksgvsua90516lum0nm9lneho	Miami	active	[{"type": "paragraph", "children": [{"bold": true, "text": "Miami metropolitan area"}, {"text": "is the seventh-largest"}, {"href": "https://en.wikipedia.org/wiki/List_of_metropolitan_statistical_areas", "type": "link", "children": [{"text": "metropolitan area"}]}, {"text": "in the United States and the"}, {"href": "https://en.wikipedia.org/wiki/List_of_metropolitan_areas_by_population", "type": "link", "children": [{"text": "72nd largest"}]}, {"text": "metropolitan area in the world. At 1,279.2 sq mi (3,313 km"}, {"text": "2", "superscript": true}, {"text": ") of"}, {"href": "https://en.wikipedia.org/wiki/Urban_area", "type": "link", "children": [{"text": "urban landmass"}]}, {"text": "it is one of the"}, {"href": "https://en.wikipedia.org/wiki/List_of_most_populous_metropolitan_areas", "type": "link", "children": [{"text": "most populous"}]}, {"text": ""}, {"href": "https://en.wikipedia.org/wiki/Urban_agglomeration", "type": "link", "children": [{"text": "urban agglomerations"}]}, {"text": "in the world. The"}, {"href": "https://en.wikipedia.org/wiki/City_of_Miami", "type": "link", "children": [{"text": "City of Miami"}]}, {"text": "is the financial and cultural core of the metropolis. The metropolitan area includes the"}, {"href": "https://en.wikipedia.org/wiki/Miami-Dade_County,_Florida", "type": "link", "children": [{"text": "Miami-Dade"}]}, {"text": ","}, {"href": "https://en.wikipedia.org/wiki/Broward_County,_Florida", "type": "link", "children": [{"text": "Broward"}]}, {"text": ", and"}, {"href": "https://en.wikipedia.org/wiki/Palm_Beach_County,_Florida", "type": "link", "children": [{"text": "Palm Beach"}]}, {"text": "counties which are the first, second, and third most populous"}, {"href": "https://en.wikipedia.org/wiki/List_of_counties_in_Florida", "type": "link", "children": [{"text": "counties in Florida"}]}, {"text": ". Miami-Dade, with 2,716,940 people in 2019, is the seventh most populous county in the United States. The three counties together have principal cities including"}, {"href": "https://en.wikipedia.org/wiki/Miami", "type": "link", "children": [{"text": "Miami"}]}, {"text": ","}, {"href": "https://en.wikipedia.org/wiki/Fort_Lauderdale,_Florida", "type": "link", "children": [{"text": "Fort Lauderdale"}]}, {"text": ","}, {"href": "https://en.wikipedia.org/wiki/Pembroke_Pines,_Florida", "type": "link", "children": [{"text": "Pembroke Pines"}]}, {"text": ","}, {"href": "https://en.wikipedia.org/wiki/West_Palm_Beach,_Florida", "type": "link", "children": [{"text": "West Palm Beach"}]}, {"text": ","}, {"href": "https://en.wikipedia.org/wiki/Hialeah,_Florida", "type": "link", "children": [{"text": "Hialeah"}]}, {"text": ","}, {"href": "https://en.wikipedia.org/wiki/Hollywood,_Florida", "type": "link", "children": [{"text": "Hollywood"}]}, {"text": ", and"}, {"href": "https://en.wikipedia.org/wiki/Boca_Raton,_Florida", "type": "link", "children": [{"text": "Boca Raton"}]}, {"text": ". It sits within the"}, {"href": "https://en.wikipedia.org/wiki/South_Florida", "type": "link", "children": [{"text": "South Florida"}]}, {"text": "region, which includes the"}, {"href": "https://en.wikipedia.org/wiki/Everglades", "type": "link", "children": [{"text": "Everglades"}]}, {"text": "and the"}, {"href": "https://en.wikipedia.org/wiki/Florida_Keys", "type": "link", "children": [{"text": "Florida Keys"}]}, {"text": ". It is also synonymous with an area known collectively as the"}, {"href": "https://en.wikipedia.org/wiki/Gold_Coast_(Florida)", "type": "link", "children": [{"text": "\\"Gold Coast\\""}]}, {"text": "."}]}, {"type": "paragraph", "children": [{"bold": true, "text": "Miami metropolitan area"}, {"text": "(also known as Metro Miami) which is the most populous in Florida and the"}, {"href": "https://en.wikipedia.org/wiki/Southeastern_United_States#Metropolitan_Statistical_Areas", "type": "link", "children": [{"text": "second largest in the southeastern United States"}]}, {"text": "."}, {"href": "https://en.wikipedia.org/wiki/Miami_metropolitan_area#cite_note-3", "type": "link", "children": [{"text": "[3]", "superscript": true}]}, {"text": ""}, {"href": "https://en.wikipedia.org/wiki/Miami_metropolitan_area#cite_note-4", "type": "link", "children": [{"text": "[4]", "superscript": true}]}, {"text": ""}, {"href": "https://en.wikipedia.org/wiki/Miami_metropolitan_area#cite_note-5", "type": "link", "children": [{"text": "[5]", "superscript": true}]}, {"text": ""}, {"href": "https://en.wikipedia.org/wiki/Miami_metropolitan_area#cite_note-6", "type": "link", "children": [{"text": "[6]", "superscript": true}]}, {"bold": true, "text": "Greater Miami"}, {"text": "includes a larger area defined by the"}, {"href": "https://en.wikipedia.org/wiki/United_States_Census_Bureau", "type": "link", "children": [{"text": "United States Census Bureau"}]}, {"bold": true, "text": "Miami-Port St. Lucie-Fort Lauderdale"}, {"text": ""}, {"href": "https://en.wikipedia.org/wiki/Combined_statistical_area", "type": "link", "children": [{"text": "Combined statistical area"}]}, {"text": ". This larger area includes"}, {"href": "https://en.wikipedia.org/wiki/Martin_County,_Florida", "type": "link", "children": [{"text": "Martin"}]}, {"text": ","}, {"href": "https://en.wikipedia.org/wiki/Saint_Lucie_County,_Florida", "type": "link", "children": [{"text": "Saint Lucie"}]}, {"text": ", and"}, {"href": "https://en.wikipedia.org/wiki/Indian_River_County", "type": "link", "children": [{"text": "Indian River"}]}, {"text": "counties to the north of Palm Beach County."}]}, {"type": "paragraph", "children": [{"text": "Because the population of South Florida is largely confined to a strip of land between the Atlantic Ocean and the"}, {"href": "https://en.wikipedia.org/wiki/Everglades", "type": "link", "children": [{"text": "Everglades"}]}, {"text": ", the Miami"}, {"href": "https://en.wikipedia.org/wiki/Urban_area#United_States", "type": "link", "children": [{"text": "urbanized area"}]}, {"text": "(that is, the area of contiguous urban development) is about 100 miles (160 km) long (north to south), but never more than 20 miles (32 km) wide, and in some areas only 5 miles (8 km) wide (east to west). The Miami metropolitan statistical area is longer than any other urbanized area in the United States except for the"}, {"href": "https://en.wikipedia.org/wiki/New_York_metropolitan_area", "type": "link", "children": [{"text": "New York metropolitan area"}]}, {"text": "."}, {"href": "https://en.wikipedia.org/wiki/Miami_metropolitan_area#cite_note-7", "type": "link", "children": [{"text": "[7]", "superscript": true}]}, {"text": "It was the eighth most densely populated urbanized area in the United States in the 2000 census."}, {"href": "https://en.wikipedia.org/wiki/Miami_metropolitan_area#cite_note-8", "type": "link", "children": [{"text": "[8]", "superscript": true}]}, {"text": ""}]}, {"type": "paragraph", "children": [{"text": "As of the 2000 census, the urbanized area had a land area of 1,116 square miles (2,890 km"}, {"text": "2", "superscript": true}, {"text": "), with a population of 4,919,036, for a"}, {"href": "https://en.wikipedia.org/wiki/Population_density", "type": "link", "children": [{"text": "population density"}]}, {"text": "of 4,407.4 per square mile (1,701.7 per square kilometer). Miami and"}, {"href": "https://en.wikipedia.org/wiki/Hialeah", "type": "link", "children": [{"text": "Hialeah"}]}, {"text": "(the second largest city in the metropolitan area) had population densities of more than 10,000 per square mile (more than 3,800 per square kilometer)."}, {"href": "https://en.wikipedia.org/wiki/Miami_metropolitan_area#cite_note-9", "type": "link", "children": [{"text": "[9]", "superscript": true}]}, {"text": ""}, {"href": "https://en.wikipedia.org/wiki/Miami_metropolitan_area#cite_note-10", "type": "link", "children": [{"text": "[10]", "superscript": true}]}, {"text": "The Miami Urbanized Area was the fourth largest urbanized area in the United States in the 2010 census."}]}, {"type": "paragraph", "children": [{"text": "The Miami metropolitan area also includes several"}, {"href": "https://en.wikipedia.org/wiki/Urban_area#United_States", "type": "link", "children": [{"text": "urban clusters"}]}, {"text": "(UCs) as of the 2000 Census which are not part of the Miami Urbanized Area. These are the"}, {"href": "https://en.wikipedia.org/wiki/Belle_Glade,_Florida", "type": "link", "children": [{"text": "Belle Glade"}]}, {"text": "UC, population 24,218, area 20,717,433 square meters and population density of 3027.6 per square mile;"}, {"href": "https://en.wikipedia.org/wiki/Key_Biscayne,_Florida", "type": "link", "children": [{"text": "Key Biscayne"}]}, {"text": "UC, population 10,513, area 4,924,214 square meters and population density of 5529.5 per square mile;"}, {"href": "https://en.wikipedia.org/wiki/Redland,_Florida", "type": "link", "children": [{"text": "Redland"}]}, {"text": "UC, population 3,936, area 10,586,212 square meters and population density of 963.0 per square mile; and"}, {"href": "https://en.wikipedia.org/wiki/Jupiter,_Florida", "type": "link", "children": [{"text": "West Jupiter"}]}, {"text": "UC, population 8,998, area 24,737,176 square meters and population density of 942.1 per square mile."}, {"href": "https://en.wikipedia.org/wiki/Miami_metropolitan_area#cite_note-11", "type": "link", "children": [{"text": "[11]", "superscript": true}]}, {"text": ""}]}, {"type": "paragraph", "children": [{"text": "Major colleges and universities in the Greater Miami area include the"}, {"href": "https://en.wikipedia.org/wiki/University_of_Miami", "type": "link", "children": [{"text": "University of Miami"}]}, {"text": ","}, {"href": "https://en.wikipedia.org/wiki/Florida_International_University", "type": "link", "children": [{"text": "Florida International University"}]}, {"text": ","}, {"href": "https://en.wikipedia.org/wiki/Florida_Atlantic_University", "type": "link", "children": [{"text": "Florida Atlantic University"}]}, {"text": ","}, {"href": "https://en.wikipedia.org/wiki/Nova_Southeastern_University", "type": "link", "children": [{"text": "Nova Southeastern University"}]}, {"text": ","}, {"href": "https://en.wikipedia.org/wiki/Miami_Dade_College", "type": "link", "children": [{"text": "Miami Dade College"}]}, {"text": ","}, {"href": "https://en.wikipedia.org/wiki/Broward_College", "type": "link", "children": [{"text": "Broward College"}]}, {"text": "and"}, {"href": "https://en.wikipedia.org/wiki/Palm_Beach_State_College", "type": "link", "children": [{"text": "Palm Beach State College"}]}, {"text": ", among others."}]}]	\N	The Miami metropolitan area is the seventh-largest metropolitan area in the United States and the 72nd largest metropolitan area in the world. At 1,279.2 sq mi (3,313 km2) of urban landmass it is one of the most populous urban agglomerations in the world. The City of Miami is the financial and cultural core of the metropolis.
cksgvw9sk1002lum016mj5kna	Phoenix Metro	cksgvskpc0415lum0sykzodd0	Phoenix	active	[{"type": "paragraph", "children": [{"bold": true, "text": "Phoenix Metropolitan AreaValley of the SunSalt River ValleyPhoenix Metro"}, {"text": "(known by most locals simply as “the Valley”) – is the largest"}, {"href": "https://en.wikipedia.org/wiki/United_States_metropolitan_area", "type": "link", "children": [{"text": "metropolitan area"}]}, {"text": "in the"}, {"href": "https://en.wikipedia.org/wiki/Southwestern_United_States", "type": "link", "children": [{"text": "Southwestern United States"}]}, {"text": ", centered on the city of"}, {"href": "https://en.wikipedia.org/wiki/Phoenix,_Arizona", "type": "link", "children": [{"text": "Phoenix"}]}, {"text": ", that includes much of the central part of"}, {"href": "https://en.wikipedia.org/wiki/Arizona", "type": "link", "children": [{"text": "Arizona"}]}, {"text": ". The"}, {"href": "https://en.wikipedia.org/wiki/United_States_Office_of_Management_and_Budget", "type": "link", "children": [{"text": "United States Office of Management and Budget"}]}, {"bold": true, "text": "Phoenix-Mesa-Scottsdale"}, {"text": ""}, {"href": "https://en.wikipedia.org/wiki/Metropolitan_Statistical_Area", "type": "link", "children": [{"text": "Metropolitan Statistical Area (MSA)"}]}, {"text": ", defining it as"}, {"href": "https://en.wikipedia.org/wiki/Maricopa_County,_Arizona", "type": "link", "children": [{"text": "Maricopa"}]}, {"text": "and"}, {"href": "https://en.wikipedia.org/wiki/Pinal_County,_Arizona", "type": "link", "children": [{"text": "Pinal"}]}, {"text": "counties. As of the Census Bureau's 2017 population estimates, Metro Phoenix had 4,737,270 residents, making it the"}, {"href": "https://en.wikipedia.org/wiki/List_of_Metropolitan_Statistical_Areas#United_States", "type": "link", "children": [{"text": "10th largest"}]}, {"text": "metropolitan area in the nation by population. The"}, {"href": "https://en.wikipedia.org/wiki/Gross_domestic_product", "type": "link", "children": [{"text": "gross domestic product"}]}, {"text": "of the Phoenix Metropolitan Area was $242 billion in 2017,"}, {"href": "https://en.wikipedia.org/wiki/List_of_U.S._metropolitan_areas_by_GDP", "type": "link", "children": [{"text": "16th"}]}, {"text": "largest amongst metro areas in the United States."}]}, {"type": "paragraph", "children": [{"text": "It is also one of the fastest-growing major metropolitan areas, gaining nearly 800,000 residents from 2010 to 2018, and nearly 1.6 million since 2000. The population of the Phoenix Metropolitan Area increased by 45.3% from 1990 through 2000, compared to the average United States rate of 13.2%, helping to make"}, {"href": "https://en.wikipedia.org/wiki/Arizona", "type": "link", "children": [{"text": "Arizona"}]}, {"text": "the second fastest growing state in the nation in the 1990s (the fastest was"}, {"href": "https://en.wikipedia.org/wiki/Nevada", "type": "link", "children": [{"text": "Nevada"}]}, {"text": ")."}, {"href": "https://en.wikipedia.org/wiki/Phoenix_metropolitan_area#cite_note-5", "type": "link", "children": [{"text": "[5]", "superscript": true}]}, {"text": "The 2000 Census reported the population of the metropolitan area to be 3,251,876."}]}, {"type": "paragraph", "children": [{"text": "As for the 2010 Census, the two-county metropolitan area was reported to have a population of 4,192,887. Metro Phoenix grew by 941,011 people from April 2000 to April 2010, making it one of the fastest growing metro areas in the country. This also contributed to the entire state's exceptional growth, as the area is home to just over two-thirds of Arizona's population."}]}]	\N	The Phoenix Metropolitan Area – also the Valley of the Sun, the Salt River Valley, or Phoenix Metro (known by most locals simply as “the Valley”) – is the largest metropolitan area in the Southwestern United States, centered on the city of Phoenix, that includes much of the central part of Arizona.
cksgvwu7o1161lum08t9b3u03	San Diego Metro	cksgvrknr0213lum0dlgse0ed	San Diego	active	[{"type": "paragraph", "children": [{"text": "test"}]}]	\N	San Diego, Spanish for 'Saint Didacus', is a city in the U.S. state of California on the coast of the Pacific Ocean and immediately adjacent to the Mexican border. With an estimated population of 1,423,851 San Diego is the eighth most populous city in the United States. The city is known for its mild year-round climate, natural deep-water harbor, extensive beaches and parks, long association with the United States Navy and Marine Corps, and recent emergence as a healthcare and biotechnology development center.
cksgvtkfp0739lum0ip7ozv2h	Seattle Metro	cksgvqldk0112lum03hcmcvi0	Seattle	active	[{"type": "paragraph", "children": [{"text": ""}]}]	\N	The Seattle metropolitan area is an urban conglomeration in the U.S. state of Washington that comprises Seattle, its surrounding satellites and suburbs. With an estimated population of 4,018,598 as of 2020,[1] it is the 15th largest metropolitan statistical area (MSA) in the United States and is home to over half of Washington's population.
\.


--
-- Data for Name: Tag; Type: TABLE DATA; Schema: public; Owner: keystone
--

COPY public."Tag" (id, name) FROM stdin;
cksgvtxay0802lum0de2jbtn0	Mountains
cksgvu8cb0812lum0fpa7p41x	Beaches
cksgvw82p0986lum0ggr8tcp4	Desert
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: keystone
--

-- COPY public."User" (id, name, email, password) FROM stdin;
-- cksgvpdps0035lum06z4wlgcq	admin	admin@example.com	$2a$10$LPAOjtrgzTD2An4mH4XDreTonkXcrghF9cg2Df/g/a4PGwagBDY3S
-- \.


--
-- Data for Name: _Image_locations_Location_images; Type: TABLE DATA; Schema: public; Owner: keystone
--

COPY public."_Image_locations_Location_images" ("A", "B") FROM stdin;
cksgyu4fd0168gkm0qzmaxeyu	cksgvtkfp0739lum0ip7ozv2h
cksgyupko0344gkm07ecusmbc	cksgvxiek1328lum0zdxzypre
cksgyuzmt0520gkm0eo8w0dxs	cksgvw9sk1002lum016mj5kna
cksgyv9x60696gkm04guawvmk	cksgvwu7o1161lum08t9b3u03
\.


--
-- Data for Name: _Location_tags_Tag_locations; Type: TABLE DATA; Schema: public; Owner: keystone
--

COPY public."_Location_tags_Tag_locations" ("A", "B") FROM stdin;
cksgvw9sk1002lum016mj5kna	cksgvw82p0986lum0ggr8tcp4
cksgvwu7o1161lum08t9b3u03	cksgvu8cb0812lum0fpa7p41x
cksgvxiek1328lum0zdxzypre	cksgvu8cb0812lum0fpa7p41x
\.


--
-- PostgreSQL database dump complete
--

