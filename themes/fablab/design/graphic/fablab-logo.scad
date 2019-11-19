
module fblb_logo(center=true) {
  offs = center ? [0,0,0] : 0.5*[1,1,1];
  $fn = 80;
  r1 = 0.3;  //0.35;
  r2 = 0.15; //0.2;
  translate(offs)
    difference() {
      cube(1,center=true);
//      translate([0,0,-0.1])
      for (r=[[[0,0,0],[0,0,0]],[[0,90,0],[0,0,90]],[[-90,0,0],[0,0,-90]]])
        rotate(r[0]) rotate(r[1]) union() {
          cylinder(r=r1,h=1.2,center=false);
          translate([0,-0.5,0.5])
            cube([2*r2,1,1],center=true);
          rotate([90,0,0])
            cylinder(r=r2,h=0.6);
        }
      sphere(r=r1);
    }
}

scale(10)
  fblb_logo(center=false);
