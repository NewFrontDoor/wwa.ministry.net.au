import React, { Component } from "react";

var songs = [
	{ title: "10,000 Reasons (Bless The Lord)", by: "Jonas Myrin; Matt Redman" },
	{ title: "All I Have is Christ", by: "Jordan Kauflin" },
	{ title: "Behold Our God", by: "Jonathan Baird; Meghan Baird; Ryan Baird; Stephen Altrogge" },
	{ title: "Blessed Be Your Name", by: "Beth Redman; Matt Redman" },
	{ title: "Cornerstone", by: "Edward Mote, Eric Liljero, Jonas Myrin, Reuben Morgan & William Batchelder Bradbury" },
	{ title: "Forever", by: "Chris Tomlin" },
	{ title: "Here I am to Worship", by: "Tim Hughes" },
	{ title: "Here I Bow", by: "Brian Johnson, Jason Ingram, Jenn Johnson, Jonas Myrin & Matt Redman" },
	{ title: "How Deep the Father's Love for Us", by: "Stuart Townend" },
	{ title: "In Christ Alone", by: "Keith Getty; Stuart Townend" },
	{ title: "In His Name", by: "Charles Wesley; Gavin Perkins; Luke Woodhouse; Nathan Walter" },
	{
		title: "Just As I Am",
		by: "Charlotte Elliott; David Moffitt; Sue C. Smith; Travis Cottrell; William Batchelder Bradbury"
	},
	{ title: "Revelation Song", by: "Jennie Lee Riddle" },
	{ title: "Rock Of Ages", by: "Augustus Montague Toplady; arr Ruth Buchanan" },
	{ title: "See Him Coming", by: "Mark Peterson" },
	{ title: "Speak O Lord", by: "Keith Getty; Stuart Townend" },
	{ title: "There Is A Redeemer", by: "Melody Green" },
	{ title: "This Life I Live", by: "Michael Morrow" },
	{ title: "Undivided", by: "Rob Smith" },
	{ title: "What A Friend We Have In Jesus", by: "Charles Crozat Converse; David Paxton; Joseph Medlicott Scriven" },
	{ title: "You Gave Your Life (If Christ be God)", by: "Steve Tillbrook" },
	{ title: "You Never Change", by: "Rob Smith" },
	{ title: "On that Day", by: "Rich Thompson, Jonny Robinson, Michael Farren, Nigel Hendroff, Scott Lavender" },
	{ title: "Agnus Dei", by: "Michael W. Smith" },
	{ title: "Open the Eyes of My Heart", by: "Michael W. Smith" },
	{ title: "Holy Holy Holy", by: "Reginald Heber / John B Dykes" },
	{ title: "Amazing Grace (My Chains are Gone)", by: "Chris Tomlin" },
	{ title: "Lord I Need You", by: "Matt Maher" }
];

//Sort songs alphabetically
songs.sort((a, b) => {
	const songA = a.title.toLowerCase();
	const songB = b.title.toLowerCase();
	if (songA < songB) {
		return -1;
	}
	if (songA > songB) {
		return 1;
	}
	return 0;
});

class Worship extends Component {
	render() {
		return (
			<section className="container">
				<div className="section_header">
					<h3>Worship</h3>
				</div>

				<p>
					<em>
						Sing and make music from your heart to the Lord, always giving thanks to God the Father for everything, in
						the name of our Lord Jesus Christ (Ephesians 5:19b – 20)
					</em>
				</p>
				<br />
				<br />
				<p>Every year during our weekend together we enjoy a time of singing together.</p>
				<p>Below is a list of the songs that we've sung during our weekends together.</p>
				<p>
					If you want to keep enjoying the music you can follow us on Spotify (Womens Weekend Away) or subscribe to the{" "}
					<a
						href="https://open.spotify.com/playlist/03eHthhMbnJz5gn6KuWUxT?si=11c565dd710a4f8e"
						target="_blank"
						rel="noopener noreferrer"
					>
						2019
					</a>{" "}
					or{" "}
					<a href="https://open.spotify.com/playlist/7sq6OpR7lMLzK9ubeXJ2q6" target="_blank" rel="noopener noreferrer">
						2023
					</a>{" "}
					playlists
				</p>
				<br />
				<table class="table">
					<thead>
						<tr class="firstrow">
							<th>Song</th>
							<th>By</th>
						</tr>
					</thead>
					<tbody>
						{songs.map((song) => (
							<tr>
								<td>{song.title}</td>
								<td>{song.by}</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		);
	}
}

export default Worship;
