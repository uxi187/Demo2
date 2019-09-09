#!/bin/sh

#delete directory
echo $(tput setaf 2)$(tput bold)$'\n'Cleaning up old reports...$(tput sgr 0)
npm run cleanup

#run specific test
echo $(tput setaf 2)$(tput bold)Running Tests....$(tput sgr 0)
npm run spec_test:nav

#generate report
echo $(tput setaf 2)$(tput bold)Generate report....$(tput sgr 0)
npm run report
