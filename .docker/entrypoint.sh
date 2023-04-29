#!/bin/bash

EXEC_PATH=$(pwd)
export GIT_SSH_COMMAND='ssh -i ~/.ssh/gitlab -o StrictHostKeyChecking=no -o LogLevel=ERROR'

if [ ! -d "$EXEC_PATH/node_modules"  ]; then
    npm install
fi
