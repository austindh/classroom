let students = [
	'Lorenzo',
	'Gage',
	'Melissa',
	'Jaylynn',
	'Rhylind',
	'Shaylie',
	'Jack',
	'Chaille',
	'Sami',
	'Tyler',
	'Rose',
	'Parker',
	'Alex',
	'Shyah',
	'Rosabelle',
	'Edgar',
	'Anthony',
	'David',
	'Serenity',
	'Valentin',
	'Kadyn'
];

$( document ).ready( () => {

	let rows = [];
	let row = [];
	for ( let i = 0; i < students.length; i++ ) {
		if ( row.length >= 7 ) {
			rows.push( row );
			row = [];
		}
		row.push( students[i] );
	}
	rows.push( row );

	rows.forEach( row => {
		let studentHtml = row.map( student => `<div class="student">${ student }</div>` );
		$( '.students' ).append( `<div class="student-row">${ studentHtml.join('\n') }</div>` );
	});

	$( '.student' ).on( 'click', e => {
		$( e.target ).toggleClass( 'done' );
	});

	$( '#reset' ).on( 'click', () => {
		$( '.student.done' ).removeClass( 'done' );
	});

});
