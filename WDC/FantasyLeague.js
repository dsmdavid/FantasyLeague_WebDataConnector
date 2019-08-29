(function () {
    // Create the connector object
    var myConnector = tableau.makeConnector();
    console.log("Connector created");
    // Define the schema
    myConnector.getSchema = function (schemaCallback) {
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
    myConnector.getData = function (table, doneCallback) {
        var authStr = tableau.connectionData;
        var league = authStr['league']

        $.post("https://python.dsmdavid.now.sh/", authStr, /* function(data, textStatus) {

        $.post("http://127.0.0.1:5000/", authStr, /* function(data, textStatus) {
        //data contains the JSON object
        //textStatus contains the status: success, error, etc */
            function (resp, textStatus) {
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
            }, "json");
    };
    tableau.registerConnector(myConnector);
    // Create event listeners for when the user submits the form
    $(document).ready(function () {
        $("#submitButton").click(function () {
            var authentObj = {
                username: document.getElementById('username_id').value,
                // $('#username'),//.val().trim(),
                password: document.getElementById('pwd_id').value,//$('#pwd')//.val().trim(),
                league: document.getElementById('league_id').value
            };

            //console.log(authentObj)


            tableau.connectionData = JSON.stringify(authentObj);
            tableau.connectionName = "TILLEAGUE"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });

})();
