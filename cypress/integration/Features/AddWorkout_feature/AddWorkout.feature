@aw
Feature: Add Workout
	I want to verify Forgotten password functionality


	Scenario Outline:  AW001 Check Add Workout page redirection
		Given user is on Add workout page
		When user click on "Back" button
		Then user is navigated to "#/workout/new" page
		When user click on "<button>" button
		Then user is navigated to "<redirectedLink>" page

		Examples:
			| button                  | redirectedLink   |
			| Add session             | #/workout/manual |
			| Manage apps and devices | #/setting/apps   |


	Scenario: AW002 Add Workout page content is correct
		Given user is on Add workout page
		Then Date field should have todays date
		And Time field should have todays time
		And input fields are visible
			| fields       |
			| Session name |
			| Duration     |
			| Distance     |
		And Mode dropdown is not accesible
		When user select Activity "Cycling"
		Then Mode dropdown is accesible


	Scenario Outline: AW003 Validate Add parameter for system sports
		Given user is on Add workout page
		When user select Activity "<activity>"
		Then add parameters "<parameter1>", "<parameter2>", "<parameter3>", "<parameter4>" will be shown

		Examples:
			| activity  | parameter1 | parameter2 | parameter3 | parameter4 |
			| Aquabike  | Heart rate | Calories   |            |            |
			| Aquathlon | Heart rate | Calories   |            |            |
			| Duathlon  | Heart rate | Calories   |            |            |
			| Swimming  | Heart rate | Calories   |            |            |
			| Triathlon | Heart rate | Calories   |            |            |
			| Weights   | Heart rate | Calories   |            |            |
			| Cycling   | Heart rate | Calories   | Speed      |            |
			| Running   | Heart rate | Calories   | Pace       | Incline    |

	Scenario: AW004 User can add/remove additional sport
		Given user is on Add workout page
		When user select Add sport button
		Then adding new sport form is visible with additional fields
			| label         |
			| Activity      |
			| Mode          |
			| Duration      |
			| Distance      |
			| Intensity     |
			| Time in zone  |
			| Add parameter |
		When user select Remove sport button
		Then adding new sport form is not visible



	Scenario: AW005 Intensity zones based on 3-zone Heart Rate model
		Given user set Heart rate zones to Zone level "3"
		When user navigate to Add workout page
		And enter 1h for duration time
		Then intensity zone persentage matches intensity slider positions
			| position | zone1 | zone2 | zone3 |
			| 1        | 100   | 0     | 0     |
			| 2        | 100   | 0     | 0     |
			| 3        | 100   | 0     | 0     |
			| 4        | 100   | 0     | 0     |
			| 5        | 85    | 15    | 0     |
			| 6        | 75    | 25    | 0     |
			| 7        | 60    | 40    | 0     |
			| 8        | 50    | 45    | 5     |
			| 9        | 30    | 45    | 25    |
			| 10       | 20    | 40    | 40    |


	Scenario: AW006 Intensity zones based on 4-zone Heart Rate model
		Given user set Heart rate zones to Zone level "4"
		When user navigate to Add workout page
		And enter 1h for duration time
		Then intensity zone persentage matches intensity slider positions
			| position | zone1 | zone2 | zone3 | zone4 |
			| 1        | 100   | 0     | 0     | 0     |
			| 2        | 60    | 40    | 0     | 0     |
			| 3        | 30    | 70    | 0     | 0     |
			| 4        | 20    | 80    | 0     | 0     |
			| 5        | 10    | 75    | 15    | 0     |
			| 6        | 5     | 70    | 25    | 0     |
			| 7        | 5     | 50    | 35    | 10    |
			| 8        | 5     | 30    | 45    | 20    |
			| 9        | 5     | 20    | 45    | 30    |
			| 10       | 5     | 20    | 35    | 40    |

	Scenario: AW007 Intensity zones based on 5-zone Heart Rate model
		Given user set Heart rate zones to Zone level "5"
		When user navigate to Add workout page
		And enter 1h for duration time
		Then intensity zone persentage matches intensity slider positions
			| position | zone1 | zone2 | zone3 | zone4 | zone5 |
			| 1        | 100   | 0     | 0     | 0     | 0     |
			| 2        | 60    | 40    | 0     | 0     | 0     |
			| 3        | 30    | 70    | 0     | 0     | 0     |
			| 4        | 20    | 55    | 25    | 0     | 0     |
			| 5        | 10    | 30    | 60    | 0     | 0     |
			| 6        | 5     | 20    | 45    | 30    | 0     |
			| 7        | 5     | 20    | 40    | 30    | 5     |
			| 8        | 5     | 20    | 30    | 30    | 15    |
			| 9        | 5     | 15    | 25    | 35    | 20    |
			| 10       | 5     | 10    | 20    | 35    | 30    |

	Scenario: AW008 Intensity zones based on 6-zone Heart Rate model
		Given user set Heart rate zones to Zone level "6"
		When user navigate to Add workout page
		And enter 1h for duration time
		Then intensity zone persentage matches intensity slider positions
			| position | zone1 | zone2 | zone3 | zone4 | zone5 | zone6 |
			| 1        | 100   | 0     | 0     | 0     | 0     | 0     |
			| 2        | 60    | 40    | 0     | 0     | 0     | 0     |
			| 3        | 30    | 70    | 0     | 0     | 0     | 0     |
			| 4        | 20    | 55    | 25    | 0     | 0     | 0     |
			| 5        | 10    | 30    | 60    | 0     | 0     | 0     |
			| 6        | 5     | 20    | 45    | 30    | 0     | 0     |
			| 7        | 5     | 20    | 40    | 30    | 5     | 0     |
			| 8        | 5     | 20    | 30    | 30    | 10    | 5     |
			| 9        | 5     | 15    | 25    | 35    | 10    | 10    |
			| 10       | 5     | 10    | 20    | 35    | 15    | 15    |

	Scenario: AW009 Intensity zones based on 7-zone Heart Rate model
		Given user set Heart rate zones to Zone level "7"
		When user navigate to Add workout page
		And enter 1h for duration time
		Then intensity zone persentage matches intensity slider positions
			| position | zone1 | zone2 | zone3 | zone4 | zone5 | zone6 | zone7 |
			| 1        | 100   | 0     | 0     | 0     | 0     | 0     | 0     |
			| 2        | 60    | 40    | 0     | 0     | 0     | 0     | 0     |
			| 3        | 30    | 70    | 0     | 0     | 0     | 0     | 0     |
			| 4        | 20    | 55    | 25    | 0     | 0     | 0     | 0     |
			| 5        | 10    | 30    | 50    | 10    | 0     | 0     | 0     |
			| 6        | 5     | 20    | 40    | 25    | 10    | 0     | 0     |
			| 7        | 5     | 20    | 20    | 25    | 25    | 5     | 0     |
			| 8        | 5     | 15    | 20    | 25    | 20    | 10    | 5     |
			| 9        | 5     | 10    | 15    | 20    | 30    | 10    | 10    |
			| 10       | 5     | 10    | 10    | 15    | 30    | 15    | 15    |

	Scenario: AW010 Intensity zones based on 8-zone Heart Rate model
		Given user set Heart rate zones to Zone level "8"
		When user navigate to Add workout page
		And enter 1h for duration time
		Then intensity zone persentage matches intensity slider positions
			| position | zone1 | zone2 | zone3 | zone4 | zone5 | zone6 | zone7 | zone8 |
			| 1        | 100   | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
			| 2        | 60    | 40    | 0     | 0     | 0     | 0     | 0     | 0     |
			| 3        | 30    | 70    | 0     | 0     | 0     | 0     | 0     | 0     |
			| 4        | 20    | 50    | 20    | 10    | 0     | 0     | 0     | 0     |
			| 5        | 10    | 20    | 30    | 15    | 15    | 10    | 0     | 0     |
			| 6        | 5     | 15    | 20    | 20    | 15    | 20    | 5     | 0     |
			| 7        | 5     | 10    | 10    | 15    | 30    | 25    | 5     | 0     |
			| 8        | 5     | 5     | 5     | 15    | 30    | 25    | 15    | 0     |
			| 9        | 5     | 5     | 5     | 10    | 25    | 25    | 15    | 10    |
			| 10       | 5     | 5     | 5     | 10    | 20    | 25    | 15    | 15    |

	Scenario: AW011 Intensity zones based on 9-zone Heart Rate model
		Given user set Heart rate zones to Zone level "9"
		When user navigate to Add workout page
		And enter 1h for duration time
		Then intensity zone persentage matches intensity slider positions
			| position | zone1 | zone2 | zone3 | zone4 | zone5 | zone6 | zone7 | zone8 | zone9 |
			| 1        | 100   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
			| 2        | 60    | 40    | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
			| 3        | 30    | 70    | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
			| 4        | 20    | 50    | 20    | 10    | 0     | 0     | 0     | 0     | 0     |
			| 5        | 10    | 20    | 10    | 20    | 20    | 10    | 10    | 0     | 0     |
			| 6        | 5     | 10    | 10    | 20    | 20    | 20    | 15    | 0     | 0     |
			| 7        | 5     | 5     | 5     | 10    | 20    | 25    | 25    | 5     | 0     |
			| 8        | 5     | 5     | 5     | 10    | 20    | 25    | 20    | 10    | 0     |
			| 9        | 5     | 5     | 5     | 5     | 15    | 20    | 25    | 15    | 5     |
			| 10       | 5     | 5     | 5     | 5     | 15    | 15    | 25    | 15    | 10    |

	Scenario: AW012 Intensity zones based on 10-zone Heart Rate model
		Given user set Heart rate zones to Zone level "10"
		When user navigate to Add workout page
		And enter 1h for duration time
		Then intensity zone persentage matches intensity slider positions
			| position | zone1 | zone2 | zone3 | zone4 | zone5 | zone6 | zone7 | zone8 | zone9 | zone10 |
			| 1        | 100   | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0      |
			| 2        | 60    | 30    | 10    | 0     | 0     | 0     | 0     | 0     | 0     | 0      |
			| 3        | 30    | 40    | 20    | 10    | 0     | 0     | 0     | 0     | 0     | 0      |
			| 4        | 20    | 25    | 10    | 25    | 20    | 0     | 0     | 0     | 0     | 0      |
			| 5        | 10    | 15    | 5     | 15    | 40    | 15    | 0     | 0     | 0     | 0      |
			| 6        | 5     | 5     | 5     | 10    | 40    | 25    | 10    | 0     | 0     | 0      |
			| 7        | 5     | 5     | 5     | 5     | 30    | 25    | 20    | 5     | 0     | 0      |
			| 8        | 5     | 5     | 5     | 5     | 20    | 20    | 25    | 10    | 5     | 0      |
			| 9        | 5     | 5     | 5     | 5     | 15    | 15    | 20    | 20    | 10    | 0      |
			| 10       | 5     | 5     | 5     | 5     | 15    | 15    | 20    | 15    | 10    | 5      |
