import { cityList } from './cities/CityList.js'
import { landmarkList } from './landmarks/LandmarkList.js'
import { leaderList } from './leaders/LeaderList.js'
import { searchFunction } from './search.js'


cityList()
landmarkList()
leaderList()

const input = document.querySelector("input")
input.addEventListener('keyup', searchFunction)