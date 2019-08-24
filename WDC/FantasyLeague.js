(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();
    console.log("Connector created");
    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        var cols = [{
            id: "id",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "playerName",
            alias: "TILer",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "rank",
            alias: "CurrentRank",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "entryName",
            alias: "TeamName",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "eventTotal",
            alias: "PointsThisWeek",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "total",
            alias: "TotalPoints",
            dataType: tableau.dataTypeEnum.int
        }
    
    ];
    console.log("Cols created");


        var tableSchema = {
            id: "TILLeague",
            alias: "What is the current standing in the most extreme league of the fantasy premier?",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };
    console.log("After schema");

    // Download the data
    // Andre's example "https://example-wdc-dataschool.andre347.now.sh/",
    myConnector.getData = function(table, doneCallback) {
        $.getJSON("https://fantasy.premierleague.com/api/leagues-classic/76993/standings/?page_new_entries=1&page_standings=1&phase=1",
         function(resp) {
            var apiresult = resp.standings.results,
                tableData = [];
            console.log("Before loop")
            // Iterate over the JSON object
            for (var i = 0, len = apiresult.length; i < len; i++) {
                tableData.push({
                    "id": apiresult[i].id,
                    "playerName": apiresult[i].player_name,
                    "rank": apiresult[i].rank,
                    "entryName": apiresult[i].entry_name,
                    "eventTotal": apiresult[i].event_total,
                    "total": apiresult[i].total

                });
                console.log("in loop");
                console.log(i);
            }

            table.appendRows(tableData);
            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = "TILLEAGUE"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
