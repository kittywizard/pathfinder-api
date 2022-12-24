# name,school,subschool,descriptor,spell_level,casting_time,range,area,effect,targets,duration,dismissible,shapeable,saving_throw,description,description_formatted,full_text,domain,short_description,mythic_text,mythic

PSQL="psql -X --username=admin --dbname=pathfinder --no-align --tuples-only -c"
echo $($PSQL "TRUNCATE spells")

cat spells_test.csv | while IFS=',' read NAME SCHOOL SUBSCHOOL DESCRIPTOR SPELL_LEVEL CASTING_TIME RANGE AREA EFFECT TARGETS DURATION DISMISSIBLE SHAPEABLE SAVING_THROW DESCRIPTION DESCRIPTION_FORMATTED FULL_TEXT DOMAIN SHORT_DESCRIPTION MYTHIC_TEXT MYTHIC
do
    if [[ $NAME != "name" ]]
        then
            # get id

            #not found
            #insert

            #get new id
    fi
