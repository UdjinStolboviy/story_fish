#!/bin/bash

timestamp=$(date +%s)
outfile=/var/www/html/_next/static/$timestamp.js

# Add assignment
echo "window._env_ = {" >> $outfile

# Read each line in .env file
# Each line represents key=value pairs
while read -r line || [[ -n "$line" ]];
do
  # Split env variables by character `=`
  if printf '%s\n' "$line" | grep -q -e '='; then
    varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
    varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
  fi

  # Read value of current variable if exists as Environment variable
  value=$(printf '%s\n' "${!varname}")
  # Otherwise use value from .env file
  [[ -z $value ]] && value=${varvalue}

  # Append configuration property to JS file
  echo "  $varname: \"$value\"," >> $outfile
done < /.env.template

echo "}" >> $outfile

cd  /var/www/html && find . -type f -name "*.html" -exec sed -i "s~<head>~<head><script src="/_next/static/$timestamp.js"></script>~g" {} +