
//Called when application is started.
function OnStart()
{
    //Lock screen orientation to Landscape.
    app.SetOrientation( "Landscape" );
    
    //Set full screen game mode.
    app.SetScreenMode( "Game" );
    
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "Horizontal,VCenter,FillXY" );
	lay.SetBackColor( "#222222" );

	//Create a web control.
	web = app.CreateWebView( 1,1, "NoScrollbar" );
	web.SetBackColor( "black" );
	lay.AddChild( web );
	
	//Add layout to app.	
	app.AddLayout( lay );
	
	//Switch off debugging for max performance.
	//(console.log call will still work)
    app.SetDebugEnabled( false );
    
    //Load first Phaser demo.
    web.LoadUrl( "game.html" );
}