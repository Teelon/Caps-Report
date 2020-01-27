$("#addRow").click(function() {
  var html = "";


  html += newRow(html);
  $("#newRow").append(html);
});

function newRow(html) {
  html += '<div class="form-row inputFormRow">';

  html += '<div class="col-lg-1 col-md-12  d-flex justify-content-center">';
  html += "<span class='rowName'>" + " Player "+ ($(".removeRow").length+1) +"</span>";
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

$(document).on("click", ".removeRow", function() {
  //var count = $('.inputFormRow').length;
  var position = $(".removeRow").index(this);

  if (position != 0) {
    $(this)
      .closest(".inputFormRow")
      .remove();

    RenameBatsmen();
  }
});

function RenameBatsmen(){
  
        var name = "Player ";
        $(".rowName").text(function (index){
            return name + (index+1);
        });


}