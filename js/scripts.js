$(document).ready(function() {

  $("#personalInfo").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("#age").val());
    var gender = $("#gender").val();
    var favoriteAnimal = $("#farmAnimal").val();

  if (age && gender && favoriteAnimal) {
    if (favoriteAnimal === "horse") {
      $("#buscemi").show();
    } else if (gender === "female" && favoriteAnimal === "chicken" && age < 60) {
      $("#mel").show();
    } else {
        $("#alone").show();
    }



  } else if (!age) {
    alert("please enter your age")
  } else if (!gender) {
    alert("please enter your gender")
  } else if (!favoriteAnimal) {
    alert("please select your favorite animal")
  }


  })
})
