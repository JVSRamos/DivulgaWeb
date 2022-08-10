#!/usr/bin/env bash

if (($# != 1))
then
    print "Usage: $0 <migration_name.ts>"
    exit
fi
node migrate create --name $1