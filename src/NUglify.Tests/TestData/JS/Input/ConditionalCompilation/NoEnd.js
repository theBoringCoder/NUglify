//@cc_on

//@set @fourteen = 14
//@set @foobar = (@fourteen * 02 - 0x08)

//@if ( @foobar == 20 )

  alert("twenty");
  
//@else
   
   alert("not twenty");

// no end statement for the condition -- this should cause an error

