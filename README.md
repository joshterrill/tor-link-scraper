# tor-link-scraper
scrapes links from a starting url on a tor site, visits those links, and scrapes more links, etc. All links get stored in a rethinkDB database.

### install tor
```
sudo apt-get install tor
```

### check if tor is running
```
service tor status
```

### installing global dependencies
```
npm install -g phantomjs
npm install -g casperjs
```

### install rethinkdb
from: http://rethinkdb.com/docs/install/ubuntu/
```
source /etc/lsb-release && echo "deb http://download.rethinkdb.com/apt $DISTRIB_CODENAME main" | sudo tee /etc/apt/sources.list.d/rethinkdb.list
wget -qO- http://download.rethinkdb.com/apt/pubkey.gpg | sudo apt-key add -
sudo apt-get update
sudo apt-get install rethinkdb
```

### install rethinkdb module
```
npm install rethinkdb
```

This assumes that once you have rethinkdb running, you create a database called ```links``` and a table called ```href```

### running
```
casperjs --proxy=127.0.0.1:9050 --proxy-type=socks5 tor-scrape.js
```

### running (without tor)
```
casperjs tor-scrape.js
```