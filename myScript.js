$("#submit-form").submit((e)=>{
  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbzKui9FqD4VQHbDHHtIvKk_SzCjf04-Woprjt2jmDshXi5-choFhr7Rt6eQOlsJGdFO/exec",
      data:$("#submit-form").serialize(),
      method:"post",
      success:function (response){
          alert("Form submitted successfully \nI will contact you as soon as possible")
          window.location.reload()
          //window.location.href="https://google.com"
      },
      error:function (err){
          alert("Something Went Wrong")
      }
  })
})

function nameChecker(){
  var userFullName = document.contactForm.name.value
  if(userFullName[0] == ' ' || userFullName == null || userFullName.includes(1) || userFullName.includes(2) || userFullName.includes(3) || userFullName.includes(4) || userFullName.includes(5) ||
  userFullName.includes(6) || userFullName.includes(7) || userFullName.includes(8) || userFullName.includes(9) || userFullName.includes(0)){
    alert('Your name is Incorrect')
    document.getElementById('FormSubmitButton').disabled = true
  }else{
    document.getElementById('FormSubmitButton').disabled = false
  }
}
