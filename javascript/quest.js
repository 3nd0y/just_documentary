data={
	"air_transport": [
		[
			"wet floor due to heavy rain", 
			"	after heavy rain all night some of floor become wet. so immediately apply wet floor warning sign and report to room boy for housekeeping."
		],
		[
			
		]
	],
	"biohazard_illness": [],
	"confined_space_entry": [],
	"cyber_security": [],
	"dropped_fallen_objects": [],
	"drugs_and_alcohol": [],
	"electrical": [],
	"explosives": [],
	"fire_flammables": [],
	"land_transport": [],
	"lifting_mechanical": [
		[
			"ESP Motor Maximus didn't use Compensating Cap",
			"when we prepare ESP, we found the ESP motor didn't use compensating cap which can cause oil level motor decrease while we will make up. This can make ESP RL time ESP"
		],
		[
			"D&F Valve not tight",
			"While make up Motor ESP we check all plug and found D&F valve on head motor is not tight. It can cause water enter to motor while RIH due to high pressure inside well and could RL end in very short time"
		],
		[
			"Surface BIW Connector hard to install",
			"we struggle install surface BIW Connector hard due to the plug can't entering the penetrator, after sometimes we realize there's a little bolt bulge which cause the locker ring difficult to rotate"
		],
		[
			"Lifting Reel Cable",
			"While mobilizing reel cable from MPP to Wellsite, the crane ask how much weight the cable reel. Fortunately the crane can supply SWL over 10*2ea Ton sling wire, which we need was 8 ton"
		],
		[
			"Surface connector Dismantle ",
			"As previous crew mentioned the surface connector gator was hard to dismantle, this caused by environment of sea, making the connector full of rust. But if SLB the surface connector use from BIW, we can dismantle easier "
		],
		[
			"Hand tools for ZUG-01",
			"After we unpacked hand tools we realize some tools we need and we ask were not sent so we need looking for another tool which has same function. This can create broken product if we didn't choose a good tools "
		],
		[
			"	Lifting Steelbox ESP ",
			"While lifting steelbox, the foko operator forget attached tag line "
		]
	],
	"manual_handling_lifting": [],
	"natural_phenomenon": [],
	"pressure": [],
	"temperature": [],
}

function get_data(){
	alert('get_data fungsi ok!');
	return data.lifting_mechanical[Math.floor(Math.random() * data.lifting_mechanical.length)][0]
}

