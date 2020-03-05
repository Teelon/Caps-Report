//jshint esversion:6

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

function getTeams(event) {
  const division = $(".division option:selected").val();
  if (division == "") {
    $(".homeTeam").empty();
    $(".homeTeam").append(`<option value=""> Please Select Division</option>`);
    $(".awayTeam").empty();
    $(".awayTeam").append(`<option value=""> Please Select Division</option>`);
    return;
  }

  $(".homeTeam").empty();
  $(".homeTeam").append(`<option value=""> Select Home Team</option>`);
  $(".awayTeam").empty();
  $(".awayTeam").append(`<option value=""> Select Away Team</option>`);


  axios.get("/team/division", { params: { divName: division } })
  .then(res => {
    const teams = res.data;

    teams.forEach(team => {
      teamId = team._id;
      teamName = team.name;

      $(".homeTeam").append(
        `<option value="${teamId}"> ${teamName}</option>`
      );
      $(".awayTeam").append(
        `<option value="${teamId}"> ${teamName}</option>`
      );
    });
  });
}
