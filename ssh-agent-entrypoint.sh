#!/usr/bin/env bash

eval `ssh-agent -s`
ssh-add

npm $@
