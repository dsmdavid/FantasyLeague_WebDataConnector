# FantasyLeague_WebDataConnector
 Tableau WDC for FantasyLeague

Shamelessly ~~stealing~~ learning from [Andre347's](https://github.com/andre347/introduction-to-wdc) Intro to WDC.

1. This is a WDC for Tableau that will get the current standings of a fantasy league (fixed to league 76993 at the moment) from the *Fantasy Premier League* (at least for phase 1)
2. I was unable to query the FPL Api directly (CORS error), so Andre347 graciously showed me how to [set up my own server](https://github.com/andre347/CORS-Server-WDC).
3. Finally, deployed to Zeit, and it seems to be working!
4. 20190827 Update: was getting an authentication error randomly, so have changed to the python API which seems to be working fine.
 

## Calling the WDC in Tableau:
1. Open Tableau > Connect to Data > Web Data Connector
2. Copy the url https://fantasyleaguewebdataconnector.dsmdavid.now.sh/WDC/FantasyLeague.html and click the download button