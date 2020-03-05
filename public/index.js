// jshint esversion:6

(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");

      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            } else {
              alert("info sent");
              postForm();
              event.preventDefault();
            }

            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

// Batsman Function
function addBatsmanRow() {
  var html = "";
  var batsmen = [];
  var bowlers = [];
  axios.get("/team").then(res => {
    batsmen = res.data.members;
    bowlers = res.data.bowlers;
    html += newRow(html, batsmen, bowlers);
    $("#home1").append(html);
  });
}
function newRow(html, batsmen, bowlers) {
  html += '<div class="form-row inputFormRow">';

  html += '<div class="col-lg-1 col-md-12  d-flex justify-content-center">';
  html +=
    "<span class='rowName'>" +
    " Player " +
    ($(".removeRow").length + 1) +
    "</span>";
  html += "</div>";

  //batsman name
  html += '<div class="col-lg col-md-6">';
  html += '<div class="form-group">';
  html += '<label class="sr-only" >How Out</label>';
  html += '<select class="form-control form-control-sm name" required>';
  html += '<option value="" selected>Select Batsman</option>';
  bowlers.forEach(bowler => {
    html += '<option value="' + bowler.id + '"> ' + bowler.name + "</option>";
  });
  html += "</select>";
  html += "</div>";
  html += "</div>";

  //player score
  html += '<div class="col-lg-2 col-md-6">';
  html += '<div class="form-group">';
  html += '<label class="sr-only" >Player Score</label>';
  html +=
    '<input type="number" class="form-control  form-control-sm score"  placeholder="Score" required>';
  html += "</div>";
  html += "</div>";

  // How Out
  html += '<div class="col-lg col-md-6">';
  html += '<div class="form-group">';
  html += '<label class="sr-only" >How Out</label>';
  html += '<select class="form-control form-control-sm howout" required>';
  html += '<option value="">How Out</output></option>';
  html += '<option value="Bowl">Bowl</option>';
  html += '<option value="Caught">Caught</option>';
  html += '<option value="Run Out">Run Out</option>';
  html += '<option value="LBW">LBW</option>';
  html += "</select>";
  html += "</div>";
  html += "</div>";

  //choose blower
  html += '<div class="col-lg col-md-6">';
  html += '<div class="form-group">';
  html += ' <label class="sr-only" >Bowler</label>';
  html += '<select class="form-control  form-control-sm bowler" required>';
  html += '<option value="" selected>Choose Bowler</option>';
  // bowlers.forEach(bowler => {
  //   html += '<option value="' + 1 + '"> ' + 1 + "</option>";
  // });

  html += "</select>";
  html += "</div>";
  html += "</div>";

  // Remove button
  html += '<div class="col-lg-1 col-md-6">';
  html +=
    '<button  type="button" class="btn btn-danger btn-sm removeRow"><i class="far fa-trash-alt"></i></button>';
  html += "</div>";

  html += "</div>";
  return html;
}

$(document).on("click", ".removeRow", function(event) {

  console.log(event);
  const div ="home1";
  const position = $("#"+div+".removeRow").index(this);

  if (position != 0) {
    $(this)
      .closest(".inputFormRow")
      .remove();

    RenameBatsmen(div);
  }
});

function RenameBatsmen(div) {

  var name = "Player ";
  $("#"+div+" .rowName").text(function(index) {
    return name + (index + 1);
  });
}

function batmenScore() {
  if ($(".batsmenScore").val() == "") {
    $(".inns").attr("disabled", "");
  } else if ($(".batsmenScore").val() == "home") {
    $(".inns").removeAttr("disabled");
    const batTeamv = $(".homeTeam").val();
    const bowlTeamv = $(".awayTeam").val();
    alert(batTeamv+" "+bowlTeamv);
    axios
      .get("/team", {
        params: {
          batTeam:  batTeamv , 
          bowlTeam: bowlTeamv 
        }
      })
      .then(res => {
        addInfoBatsmen(res);
      });
  } else {
    $(".inns").removeAttr("disabled");
  }
}

function addInfoBatsmen(res){
 
}
//Blowers Functions
function addBowlerRow() {
  var html = "";
  var bowlers = [];
  axios.get("/team").then(res => {
    bowlers = res.data.bowlers;
    html += newBowlerRow(html, bowlers);
    $("#newBowlerRow").append(html);
  });
}

function newBowlerRow(html, bowlers) {
  html += ' <div class="form-row inputFormRowBowler  ">';
  html += ' <div class="col-lg-1 col-md-12  d-flex justify-content-center">';
  html +=
    '   <span class="rowNameBowler">' +
    " Bowler " +
    ($(".removeBolwerRow").length + 1) +
    "</span>";
  html += "  </div>";

  // blower selection
  html += ' <div class="col-lg-3 col-md-6  ">';
  html += '   <div class="form-group">';
  html +=
    '     <label class="sr-only" for="exampleFormControlSelect2">Select Bowler</label>';
  html += '  <select class="form-control form-control-sm name" required>';
  html += ' <option value="" selected>Select Bowler</option>';
  bowlers.forEach(bowler => {
    html += '<option value="' + bowler.id + '"> ' + bowler.name + "</option>";
  });
  html += " </select>";
  html += "</div>";
  html += " </div>";

  // Runs input feild
  html += ' <div class="col-lg col-md-6 ">';
  html += '<div class="form-group">';
  html += '<label class="sr-only" for="inlineFormInputName2">Runs</label>';
  html +=
    '<input type="number" class="form-control  form-control-sm runs " id="inlineFormInputName2"';
  html += '  placeholder="Runs" required>';
  html += "</div>";
  html += " </div>";

  //wkts input feild
  html += '<div class="col-lg col-md-6 ">';
  html += '<div class="form-group">';
  html += '<label class="sr-only" for="exampleFormControlSelect2">Wkts</label>';
  html +=
    '<input type="number" class="form-control  form-control-sm wkts" id="inlineFormInputName2"';
  html += ' placeholder="Wkts" required>';
  html += "</div>";
  html += " </div>";

  //overs input feild
  html += ' <div class="col-lg col-md-6 ">';
  html += ' <div class="form-group">';
  html +=
    '<label class="sr-only" for="exampleFormControlSelect2">Overs</label>';
  html += '<input type="number" class="form-control  form-control-sm  overs" ';
  html += 'placeholder="Overs Bowled" required>';
  html += "</div>";
  html += "</div>";

  // madiens input feild

  html += '<div class="col-lg col-md-6">';
  html += '<div class="form-group">';
  html +=
    '<label class="sr-only" for="exampleFormControlSelect2">Maidens</label>';
  html += '<input type="number" class="form-control  form-control-sm maidens" ';
  html += ' placeholder="Madiens" required>';
  html += "</div>";
  html += " </div>";

  // remove button

  html += ' <div class="col-lg-1 col-md-6  ">';
  html +=
    ' <button type="button" class="btn btn-danger btn-sm removeBolwerRow"><i class="far fa-trash-alt"></i></button>';
  html += "</div>";

  return html;
}

$(document).on("click", ".removeBolwerRow", function() {
  var position = $(".removeBolwerRow").index(this);

  if (position != 0) {
    $(this)
      .closest(".inputFormRowBowler")
      .remove();

    RenameBowler();
  }
});



function RenameBowler() {
  var name = "Bowler ";
  $(".rowNameBowler").text(function(index) {
    return name + (index + 1);
  });
}

$(".fa-star").click(function(event) {
  var lastClass = $(this)
    .parent()
    .attr("class")
    .split(" ")
    .pop();
  const value = ($(".fa-star").index(this) % 5) + 1;

  $(".ga" + lastClass).val(value);
  clearRating(lastClass);
  addRating(lastClass, value);
});

function clearRating(lastClass) {
  $("." + lastClass + " .fa-star").removeClass("checked");
}

function addRating(lastClass, value) {
  const stars = $("." + lastClass + " .fa-star");

  for (var i = 0; i < value; i++) {
    stars.eq(i).addClass("checked");
  }
}

// form function for radio button

function enableRadio(event) {
  if (event.target.value != "") {
    $(".Choose").removeAttr("disabled");
  } else {
    $(".Choose").attr("disabled", "");
  }
  setInnsTeam();
}

function setInnsTeam() {
  const selectedteam = $(".wonby").val();
  const choice = $(".Choose:checked").val();
  var selectedText = $(".wonby option:selected").text();
  var otherText = $(".wonby option:not(:selected)")
    .last()
    .text();
  console.log(selectedText + " text :" + otherText);

  if (selectedteam == "home" && choice == "bat") {
    $(".teamInns1").attr("value", selectedText);
    $(".teamInns3").attr("value", selectedText);
    $(".teamInns2").attr("value", otherText);
    $(".teamInns4").attr("value", otherText);
  } else if (selectedteam == "home" && choice == "bowl") {
    $(".teamInns1").attr("value", otherText);
    $(".teamInns3").attr("value", otherText);
    $(".teamInns2").attr("value", selectedText);
    $(".teamInns4").attr("value", selectedText);
  } else if (selectedteam == "away" && choice == "bat") {
    $(".teamInns1").attr("value", selectedText);
    $(".teamInns3").attr("value", selectedText);
    $(".teamInns2").attr("value", otherText);
    $(".teamInns4").attr("value", otherText);
  } else if (selectedteam == "away" && choice == "bowl") {
    $(".teamInns1").attr("value", otherText);
    $(".teamInns3").attr("value", otherText);
    $(".teamInns2").attr("value", selectedText);
    $(".teamInns4").attr("value", selectedText);
  } else {
    $(".teamInns1").attr("value", "");
    $(".teamInns3").attr("value", "");
    $(".teamInns2").attr("value", "");
    $(".teamInns4").attr("value", "");
  }
}

function getBatsman() {
  const allrows = $(".inputFormRow").length;
  let arr = [];

  for (var i = 0; i < allrows; i++) {
    const batsman = {
      batsName: $(".inputFormRow .name")
        .eq(i)
        .val(),
      batsScore: $(".inputFormRow .score")
        .eq(i)
        .val(),
      batsHowout: $(".inputFormRow .howout")
        .eq(i)
        .val(),
      batsBowler: $(".inputFormRow .bowler")
        .eq(i)
        .val()
    };

    arr.push(batsman);
  }
  return arr;
}

function getBowler() {
  const allrows = $(".inputFormRowBowler").length;
  let arr = [];

  for (var i = 0; i < allrows; i++) {
    const bowler = {
      bowlerName: $(".inputFormRowBowler .name")
        .eq(i)
        .val(),
      bowlerRuns: $(".inputFormRowBowler .runs")
        .eq(i)
        .val(),
      bowlerWkts: $(".inputFormRowBowler .wkts")
        .eq(i)
        .val(),
      bowlerOvers: $(".inputFormRowBowler .overs")
        .eq(i)
        .val(),
      bowlerMaidens: $(".inputFormRowBowler .maidens")
        .eq(i)
        .val()
    };

    arr.push(bowler);
  }
  return arr;
}

function postForm() {
  const body = {
    matchType: $('input[name$="matchType"]').val(),
    division: $(".division option:selected").val(),
    date: $('input[name$="date"]').val(),
    homeTeam: $(".homeTeam option:selected").val(),
    awayTeam: $(".awayTeam option:selected").val(),
    dayOne: $('input[name$="dayOne"]').val(),
    dayTwo: $('input[name$="dayTwo"]').val(),
    // Ground Assessment

    pitchPreperation: $('input[name$="pitchPreperation"]').val(),
    pitchMarkings: $('input[name$="pitchMarkings"]').val(),
    boundryMarkings: $('input[name$="boundryMarkings"]').val(),
    Outfield: $('input[name$="Outfield"]').val(),
    gameSprit: $('input[name$="gameSprit"]').val(),

    // Match Report
    toss: $(".wonby option:selected").val(),
    choice: $('input[name$="choice"]').val(),
    teamInns1: $('input[name$="teamInns1"]').val(),
    runsInns1: $('input[name$="runsInns1"]').val(),
    wktsInns1: $('input[name$="wktsInns1"]').val(),

    teamInns2: $('input[name$="teamInns2"]').val(),
    runsInns2: $('input[name$="runsInns2"]').val(),
    wktsInns2: $('input[name$="wktsInns2"]').val(),

    teamInns3: $('input[name$="teamInns3"]').val(),
    runsInns3: $('input[name$="runsInns3"]').val(),
    wktsInns3: $('input[name$="wktsInns3"]').val(),

    teamInns4: $('input[name$="teamInns4"]').val(),
    runsInns4: $('input[name$="runsInns4"]').val(),
    wktsInns4: $('input[name$="wktsInns4"]').val(),

    batsmen: getBatsman(),
    bowler: getBowler(),
    wides: $("#Extras .wides").val(),
    noBalls: $("#Extras .noBalls").val(),
    byes: $("#Extras .byes").val(),
    legByes: $("#Extras .legByes").val()
  };

  console.log(body);
  axios.post("/report", body).then(alert("finished"));
}
