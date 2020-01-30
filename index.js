$("#addRow").click(function() {
  var html = "";

  html += newRow(html);
  $("#newRow").append(html);
});

$("#addBowlerRow").click(function() {
  var html = "";

  html += newBowlerRow(html);
  $("#newBowlerRow").append(html);
});

function newRow(html) {
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
  html += '<select class="form-control form-control-sm" >';
  html += "<option selected>Select Batsman</option>";
  html += "<option>2</option>";
  html += "<option>3</option>";
  html += "<option>4</option>";
  html += "<option>5</option>";
  html += "</select>";
  html += "</div>";
  html += "</div>";

  //player score
  html += '<div class="col-lg-1 col-md-6">';
  html += '<div class="form-group">';
  html +=
    '<label class="sr-only" for="inlineFormInputName2">Player Score</label>';
  html +=
    '<input type="number" class="form-control  form-control-sm " id="inlineFormInputName2" placeholder="Score">';
  html += "</div>";
  html += "</div>";

  // How Out
  html += '<div class="col-lg col-md-6">';
  html += '<div class="form-group">';
  html +=
    '<label class="sr-only" for="exampleFormControlSelect2">How Out</label>';
  html +=
    '<select class="form-control form-control-sm " id="exampleFormControlSelect2">';
  html += " <option selected>How Out</option>";
  html += "<option>2</option>";
  html += "<option>3</option>";
  html += "<option>4</option>";
  html += "<option>5</option>";
  html += "</select>";
  html += "</div>";
  html += "</div>";

  //choose blower
  html += '<div class="col-lg col-md-6">';
  html += '<div class="form-group">';
  html +=
    ' <label class="sr-only" for="exampleFormControlSelect2">Bowler</label>';
  html +=
    '<select class="form-control  form-control-sm" id="exampleFormControlSelect2">';
  html += " <option selected>Choose Blower</option>";
  html += " <option>2</option>";
  html += "<option>3</option>";
  html += "<option>4</option>";
  html += " <option>5</option>";
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

function newBowlerRow(html) {
  html += ' <div class="form-row inputFormRowBowler  ">';
  html += ' <div class="col-lg-1 col-md-12  d-flex justify-content-center">';
  html += '   <span class="rowNameBowler">'+
  " Bowler " +
  ($(".removeBolwerRow").length + 1) +
  '</span>';
  html += "  </div>";

  // blower selection
  html += ' <div class="col-lg col-md-6  ">';
  html += '   <div class="form-group">';
  html +=
    '     <label class="sr-only" for="exampleFormControlSelect2">Select Bowler</label>';
  html +=
    '    <select class="form-control form-control-sm" id="exampleFormControlSelect2">';
  html += "   <option selected>Select Bowler</option>";
  html += "<option>2</option>";
  html += " <option>3</option>";
  html += "<option>4</option>";
  html += " <option>5</option>";
  html += " </select>";
  html += "</div>";
  html += " </div>";

  // Runs input feild 
  html += ' <div class="col-lg-1 col-md-6 ">';
  html += '<div class="form-group">';
  html += '<label class="sr-only" for="inlineFormInputName2">Runs</label>';
  html +=
    '<input type="number" class="form-control  form-control-sm " id="inlineFormInputName2"';
  html += '  placeholder="Runs">';
  html += "</div>";
  html += " </div>";

  //wkts input feild
  html += '<div class="col-lg col-md-6 ">';
  html += '<div class="form-group">';
  html += '<label class="sr-only" for="exampleFormControlSelect2">Wkts</label>';
  html +=
    '<input type="number" class="form-control  form-control-sm " id="inlineFormInputName2"';
  html += ' placeholder="Wkts">';
  html += "</div>";
  html += " </div>";

  // madiens input feild

  html += '<div class="col-lg col-md-6">';
  html += '<div class="form-group">';
  html +=
    '<label class="sr-only" for="exampleFormControlSelect2">Maidens</label>';
  html +=
    '<input type="number" class="form-control  form-control-sm " id="inlineFormInputName2"';
  html += ' placeholder="Madiens">';
  html += "</div>";
  html += " </div>";

  // remove button 

  html += ' <div class="col-lg-1 col-md-6  ">';
  html +=
    ' <button type="button" class="btn btn-danger btn-sm removeBolwerRow"><i class="far fa-trash-alt"></i></button>';
  html += "</div>";

  return html;
}

$(document).on("click", ".removeRow", function() {
  var position = $(".removeRow").index(this);

  if (position != 0) {
    $(this)
      .closest(".inputFormRow")
      .remove();

    RenameBatsmen();
  }
});

$(document).on("click", ".removeBolwerRow", function() {
  var position = $(".removeBolwerRow").index(this);

  if (position != 0) {
    $(this)
      .closest(".inputFormRowBowler")
      .remove();

      RenameBowler();
  }
});

function RenameBatsmen() {
  var name = "Player ";
  $(".rowName").text(function(index) {
    return name + (index + 1);
  });
}

function RenameBowler() {
  var name = "Bowler ";
  $(".rowNameBowler").text(function(index) {
    return name + (index + 1);
  });
}
