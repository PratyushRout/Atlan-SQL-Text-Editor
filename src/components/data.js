const data =
  "1,Davolio,Nancy,Sales Representative,Ms.,1948-12-08 ,1992-05-01 ,507 20th Ave. E. Apt. 2A,Seattle,WA,98122,USA,(206) 555-9857,5467,Education includes a BA in psychology from Colorado State University in 1970.  She also completed The Art of the Cold Call.  Nancy is a member of Toastmasters International.,2,http://accweb/emmployees/davolio.bmp\n2,Fuller,Andrew,Vice President Sales,Dr.,1952-02-19 ,1992-08-14 ,908 W. Capital Way,Tacoma,WA,98401,USA,(206) 555-9482,3457,Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative was promoted to sales manager,NULL,http://accweb/emmployees/fuller.bmp\n3,Leverling,Janet,Sales Representative,Ms.,1963-08-30 ,1992-04-01 ,722 Moss Bay Blvd.,Kirkland,WA,98033,USA,(206) 555-3412,3355,Janet has a BS degree in chemistry from Boston College (1984). She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.,2,http://accweb/emmployees/leverling.bmp\n4,Peacock,Margaret,Sales Representative,Mrs.,1937-09-19 ,1993-05-03 ,4110 Old Redmond Rd.,Redmond,WA,98052,USA,(206) 555-8122,5176,Margaret holds a BA in English literature from Concordia College (1958) and an MA from the American Institute of Culinary Arts (1966).  She was assigned to the London office temporarily from July through November 1992.,2,http://accweb/emmployees/peacock.bmp\n5,Buchanan,Steven,Sales Manager,Mr.,1955-03-04 ,1993-10-17 ,14 Garrett Hill,London,NULL,SW1 8JR,UK,(71) 555-4848,3453,Steven Buchanan graduated from St. Andrews University in Scotland with a BSC degree in 1976.  Upon joining the company as a sales representative in 1992 he spent 6 months in an orientation program at the Seattle office.,2,http://accweb/emmployees/buchanan.bmp\n6,Suyama,Michael,Sales Representative,Mr.,1963-07-02 ,1993-10-17 ,Coventry House Miner Rd.,London,NULL,EC2 7JR,UK,(71) 555-7773,428,Michael is a graduate of Sussex University (MA Economics 1983) and the University of California at Los Angeles (MBA marketing 1986).  He has also taken the courses Multi-Cultural Selling and Time Management for the Sales Professional.,5,http://accweb/emmployees/davolio.bmp\n7,King,Robert,Sales Representative,Mr.,1960-05-29 ,1994-01-02 ,Edgeham Hollow Winchester Way,London,NULL,RG1 9SP,UK,(71) 555-5598,465,Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan in 1992 the year he joined the company.,5,http://accweb/emmployees/davolio.bmp\n8,Callahan,Laura,Inside Sales Coordinator,Ms.,1958-01-09 ,1994-03-05 ,4726 11th Ave. N.E.,Seattle,WA,98105,USA,(206) 555-1189,2344,Laura received a BA in psychology from the University of Washington.  She has also completed a course in business French.  She reads and writes French.,2,http://accweb/emmployees/davolio.bmp\n9,Dodsworth,Anne,Sales Representative,Ms.,1966-01-27 ,1994-11-15 ,7 Houndstooth Rd.,London,NULL,WG2 7LT,UK,(71) 555-4444,452,Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German.,5,http://accweb/emmployees/davolio.bmp";

const heading =
  "employeeID,lastName,firstName,title,titleOfCourtesy,birthDate,hireDate,address,city,region,postalCode,country,homePhone,extension,photo,notes,reportsTo,photoPath";

let titleRow = heading.split(",").slice(1, -5);

let dataRows = data.split("\n").map((i) => i.split(",").slice(1, -4));

let dataRowsMr = data
  .split("\n")
  .filter((i) => i.includes("Mr."))
  .map((i) => i.split(",").slice(1, -4));

let dataRowsUSA = data
  .split("\n")
  .filter((i) => {
    return i.includes("USA");
  })
  .map((i) => i.split(",").slice(1, -4));

let dataRowsSales = data
  .split("\n")
  .filter((i) => {
    return i.includes("Sales Representative");
  })
  .map((i) => i.split(",").slice(1, -4));

export { titleRow, dataRowsMr, dataRowsUSA, dataRowsSales, dataRows };
