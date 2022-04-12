import * as express from 'express';

const router = express.Router();

router.get('/api/personal_info/person/:UID', (req, res, next) => {
	res.json([
		{
			id: 85,
			first_name: 'dooosh',
			last_name: 'doooshy',
			notes: null,
			user_id: 145,
			created_at: '2022-04-07T19:26:16.000Z'
		}
	]);
});

router.get('/api/earnableItems/:UID', (req, res, next) => {
	res.json([
		{
			id: 13,
			created_at: '2022-04-05T18:09:23.000Z',
			user_id: 21,
			tenant: 'dynamic',
			item_name: 'black',
			item_color: 'black',
			percentage_of_total_points_needed: 0
		},
		{
			id: 15,
			created_at: '2022-04-08T20:39:28.000Z',
			user_id: 21,
			tenant: 'dynamic',
			item_name: 'thing',
			item_color: 'red',
			percentage_of_total_points_needed: 2
		},
		{
			id: 14,
			created_at: '2022-04-07T21:03:26.000Z',
			user_id: 21,
			tenant: 'dynamic',
			item_name: 'socks',
			item_color: 'pink',
			percentage_of_total_points_needed: 25
		}
	]);
});

router.get('/api/grades/allCurrentGradesForASingleWrestler/:UID', (req, res, next) => {
	res.json([
		{
			id: 37,
			tenant: 'dynamic',
			name_of_video: 'test',
			url_to_video: 'oajoijf',
			curriculum_level: 1,
			created_at: '2021-11-26T19:02:18.000Z',
			url_to_looped_video: 'oijoij',
			number_for_ordering: 0.006,
			maximum_grade: 3,
			grade: null,
			movement_notes: null
		},
		{
			id: 33,
			tenant: 'dynamic',
			name_of_video:
				'test again again***Do Not Grade The Wrestler On This Video*** ***This video is informative and will not receive a grade*** AHHHHHHH ***This video is purely informative and will not receive a grade***',
			url_to_video: 'joij',
			curriculum_level: 1,
			created_at: '2021-10-07T18:23:03.000Z',
			url_to_looped_video: 'oijoj',
			number_for_ordering: 0.007,
			maximum_grade: 11,
			grade: null,
			movement_notes: null
		},
		{
			id: 32,
			tenant: 'dynamic',
			name_of_video:
				'test ***This video is informative and will not receive a grade*** ***This video is informative and will not receive a grade*** AHHHHHHH ***This video is purely informative and will not receive a grade***',
			url_to_video: 'oijoij',
			curriculum_level: 1,
			created_at: '2021-10-07T18:22:05.000Z',
			url_to_looped_video: 'poijpoij',
			number_for_ordering: 0.9,
			maximum_grade: 4,
			grade: null,
			movement_notes: null
		},
		{
			id: 20,
			tenant: 'dynamic',
			name_of_video:
				'Practice keeping your neck up while your partner pulls it down ***This video is informative and will not receive a grade***',
			url_to_video: 'A7wbtKgBeRc',
			curriculum_level: 1,
			created_at: '2021-06-24T18:19:34.000Z',
			url_to_looped_video: 'jfg3_a6uN00',
			number_for_ordering: 1,
			maximum_grade: 7,
			grade: null,
			movement_notes: null
		},
		{
			id: 30,
			tenant: 'dynamic',
			name_of_video:
				"trying 0don't grade ***This video is informative and will not receive a grade***",
			url_to_video: 'lkjl',
			curriculum_level: 1,
			created_at: '2021-09-10T16:30:10.000Z',
			url_to_looped_video: 'lkjlkj',
			number_for_ordering: 1.12,
			maximum_grade: 7,
			grade: null,
			movement_notes: null
		},
		{
			id: 69,
			tenant: 'dynamic',
			name_of_video: 'asdf',
			url_to_video: 'asdf',
			curriculum_level: 1,
			created_at: '2022-04-08T00:16:18.000Z',
			url_to_looped_video: 'asdf',
			number_for_ordering: 1.12,
			maximum_grade: 1000,
			grade: null,
			movement_notes: null
		},
		{
			id: 19,
			tenant: 'dynamic',
			name_of_video:
				"Wrestler's Grip ***This video is informative and will not receive a grade***",
			url_to_video: 'kJDfFk_jz2c',
			curriculum_level: 1,
			created_at: '2021-06-24T18:18:33.000Z',
			url_to_looped_video: '',
			number_for_ordering: 2,
			maximum_grade: 7,
			grade: 1,
			movement_notes: null
		},
		{
			id: 42,
			tenant: 'dynamic',
			name_of_video:
				"Wrestler's Grip ***This video is informative and will not receive a grade***",
			url_to_video: 'kJDfFk_jz2c',
			curriculum_level: 1,
			created_at: '2021-06-24T18:18:33.000Z',
			url_to_looped_video: '',
			number_for_ordering: 2,
			maximum_grade: 7,
			grade: null,
			movement_notes: null
		},
		{
			id: 24,
			tenant: 'dynamic',
			name_of_video:
				"kwesi's big move ***This video is informative and will not receive a grade***",
			url_to_video: 'PfwGTMV265E',
			curriculum_level: 1,
			created_at: '2021-06-24T21:32:09.000Z',
			url_to_looped_video: 'PfwGTMV265E',
			number_for_ordering: 5,
			maximum_grade: 7,
			grade: null,
			movement_notes: null
		},
		{
			id: 26,
			tenant: 'dynamic',
			name_of_video:
				'no one has this graded yet ***This video is informative and will not receive a grade***',
			url_to_video: 'PfwGTMV265E',
			curriculum_level: 1,
			created_at: '2021-06-27T23:48:18.000Z',
			url_to_looped_video: 'PfwGTMV265E',
			number_for_ordering: 6,
			maximum_grade: 7,
			grade: null,
			movement_notes: null
		},
		{
			id: 29,
			tenant: 'dynamic',
			name_of_video:
				'fake move with john ***This video is informative and will not receive a grade***',
			url_to_video: 'lkjldskjaf',
			curriculum_level: 1,
			created_at: '2021-08-11T23:28:47.000Z',
			url_to_looped_video: 'oijoijdf',
			number_for_ordering: 7,
			maximum_grade: 7,
			grade: null,
			movement_notes: null
		},
		{
			id: 31,
			tenant: 'dynamic',
			name_of_video:
				'Level 1 test ***This video is informative and will not receive a grade*** AHHHHHHH ***This video is purely informative and will not receive a grade***',
			url_to_video: '',
			curriculum_level: 1,
			created_at: '2021-10-06T02:47:05.000Z',
			url_to_looped_video: '',
			number_for_ordering: 8,
			maximum_grade: 7,
			grade: null,
			movement_notes: null
		},
		{
			id: 64,
			tenant: 'dynamic',
			name_of_video: 'asdf',
			url_to_video: 'asdf',
			curriculum_level: 2,
			created_at: '2021-12-31T17:20:43.000Z',
			url_to_looped_video: 'asdf',
			number_for_ordering: 1,
			maximum_grade: 3,
			grade: null,
			movement_notes: null
		},
		{
			id: 65,
			tenant: 'dynamic',
			name_of_video: 'asdff',
			url_to_video: 'asdfdfd',
			curriculum_level: 2,
			created_at: '2021-12-31T17:20:57.000Z',
			url_to_looped_video: 'sdfds',
			number_for_ordering: 2,
			maximum_grade: 3,
			grade: null,
			movement_notes: null
		},
		{
			id: 66,
			tenant: 'dynamic',
			name_of_video: 'oijfodisj',
			url_to_video: 'oijoij',
			curriculum_level: 2,
			created_at: '2021-12-31T17:21:12.000Z',
			url_to_looped_video: 'oijoijj',
			number_for_ordering: 3,
			maximum_grade: 3,
			grade: null,
			movement_notes: null
		},
		{
			id: 67,
			tenant: 'dynamic',
			name_of_video: '3fff',
			url_to_video: '3fd',
			curriculum_level: 2,
			created_at: '2021-12-31T17:21:57.000Z',
			url_to_looped_video: 'ffd',
			number_for_ordering: 4,
			maximum_grade: 3,
			grade: null,
			movement_notes: null
		},
		{
			id: 68,
			tenant: 'dynamic',
			name_of_video: 'new move',
			url_to_video: 'kdslkfjldkj',
			curriculum_level: 4,
			created_at: '2022-04-05T18:03:11.000Z',
			url_to_looped_video: 'ojidlskjdfl',
			number_for_ordering: 3,
			maximum_grade: 3,
			grade: null,
			movement_notes: null
		},
		{
			id: 28,
			tenant: 'dynamic',
			name_of_video: 'works!!! ***This video is informative and will not receive a grade***',
			url_to_video: 'lkjlkj',
			curriculum_level: 4,
			created_at: '2021-07-09T01:38:24.000Z',
			url_to_looped_video: 'lkjlkjl',
			number_for_ordering: 4,
			maximum_grade: 7,
			grade: null,
			movement_notes: null
		},
		{
			id: 27,
			tenant: 'dynamic',
			name_of_video: 'asdf ***This video is informative and will not receive a grade***',
			url_to_video: 'fdsad',
			curriculum_level: 5,
			created_at: '2021-07-09T01:34:27.000Z',
			url_to_looped_video: 'fdd',
			number_for_ordering: 5,
			maximum_grade: 7,
			grade: null,
			movement_notes: null
		},
		{
			id: 23,
			tenant: 'dynamic',
			name_of_video:
				'Stopping your opponent from grabbing your legs with "head position" ***This video is informative and will not receive a grade*** ***This video is purely informative and will not receive a grade*** ***This video is purely informative and will not receive a grade***',
			url_to_video: 'chubewIFlVE',
			curriculum_level: 6,
			created_at: '2021-06-24T18:21:24.000Z',
			url_to_looped_video: 'nug0_kAwJtw',
			number_for_ordering: 1,
			maximum_grade: 0,
			grade: null,
			movement_notes: null
		},
		{
			id: 21,
			tenant: 'dynamic',
			name_of_video:
				'Double Leg Lift ***This video is informative and will not receive a grade*** ***This video is purely informative and will not receive a grade*** ***This video is purely informative and will not receive a grade*** ***This video is purely informative and will not receive a grade*** ***This video is purely informative and will not receive a grade*** ***This video is purely informative and will not receive a grade*** ***This video is purely informative and will not receive a grade***',
			url_to_video: 'GgAuEc4ASdw',
			curriculum_level: 6,
			created_at: '2021-06-24T18:20:16.000Z',
			url_to_looped_video: 'XKk4Spbnsmg',
			number_for_ordering: 3,
			maximum_grade: 0,
			grade: null,
			movement_notes: null
		},
		{
			id: 22,
			tenant: 'dynamic',
			name_of_video:
				'Cement Mixer ***This video is informative and will not receive a grade*** ***This video is purely informative and will not receive a grade*** ***This video is purely informative and will not receive a grade***',
			url_to_video: '7IffYx9cqVA',
			curriculum_level: 6,
			created_at: '2021-06-24T18:20:52.000Z',
			url_to_looped_video: '3WnxIws2iN4',
			number_for_ordering: 4,
			maximum_grade: 0,
			grade: null,
			movement_notes: null
		}
	]);
});

router.get('/api/videos/:UID', (req, res, next) => {
	res.json([
		{
			id: 37,
			tenant: 'dynamic',
			name_of_video: 'test',
			url_to_video: 'oajoijf',
			curriculum_level: 1,
			created_at: '2021-11-26T19:02:18.000Z',
			url_to_looped_video: 'oijoij',
			number_for_ordering: 0.006,
			maximum_grade: 3
		},
		{
			id: 33,
			tenant: 'dynamic',
			name_of_video:
				'test again again***Do Not Grade The Wrestler On This Video*** ***This video is informative and will not receive a grade*** AHHHHHHH ***This video is purely informative and will not receive a grade***',
			url_to_video: 'joij',
			curriculum_level: 1,
			created_at: '2021-10-07T18:23:03.000Z',
			url_to_looped_video: 'oijoj',
			number_for_ordering: 0.007,
			maximum_grade: 11
		},
		{
			id: 32,
			tenant: 'dynamic',
			name_of_video:
				'test ***This video is informative and will not receive a grade*** ***This video is informative and will not receive a grade*** AHHHHHHH ***This video is purely informative and will not receive a grade***',
			url_to_video: 'oijoij',
			curriculum_level: 1,
			created_at: '2021-10-07T18:22:05.000Z',
			url_to_looped_video: 'poijpoij',
			number_for_ordering: 0.9,
			maximum_grade: 4
		},
		{
			id: 20,
			tenant: 'dynamic',
			name_of_video:
				'Practice keeping your neck up while your partner pulls it down ***This video is informative and will not receive a grade***',
			url_to_video: 'A7wbtKgBeRc',
			curriculum_level: 1,
			created_at: '2021-06-24T18:19:34.000Z',
			url_to_looped_video: 'jfg3_a6uN00',
			number_for_ordering: 1,
			maximum_grade: 7
		},
		{
			id: 30,
			tenant: 'dynamic',
			name_of_video:
				"trying 0don't grade ***This video is informative and will not receive a grade***",
			url_to_video: 'lkjl',
			curriculum_level: 1,
			created_at: '2021-09-10T16:30:10.000Z',
			url_to_looped_video: 'lkjlkj',
			number_for_ordering: 1.12,
			maximum_grade: 7
		},
		{
			id: 69,
			tenant: 'dynamic',
			name_of_video: 'asdf',
			url_to_video: 'asdf',
			curriculum_level: 1,
			created_at: '2022-04-08T00:16:18.000Z',
			url_to_looped_video: 'asdf',
			number_for_ordering: 1.12,
			maximum_grade: 1000
		},
		{
			id: 19,
			tenant: 'dynamic',
			name_of_video:
				"Wrestler's Grip ***This video is informative and will not receive a grade***",
			url_to_video: 'kJDfFk_jz2c',
			curriculum_level: 1,
			created_at: '2021-06-24T18:18:33.000Z',
			url_to_looped_video: '',
			number_for_ordering: 2,
			maximum_grade: 7
		},
		{
			id: 42,
			tenant: 'dynamic',
			name_of_video:
				"Wrestler's Grip ***This video is informative and will not receive a grade***",
			url_to_video: 'kJDfFk_jz2c',
			curriculum_level: 1,
			created_at: '2021-06-24T18:18:33.000Z',
			url_to_looped_video: '',
			number_for_ordering: 2,
			maximum_grade: 7
		},
		{
			id: 24,
			tenant: 'dynamic',
			name_of_video:
				"kwesi's big move ***This video is informative and will not receive a grade***",
			url_to_video: 'PfwGTMV265E',
			curriculum_level: 1,
			created_at: '2021-06-24T21:32:09.000Z',
			url_to_looped_video: 'PfwGTMV265E',
			number_for_ordering: 5,
			maximum_grade: 7
		},
		{
			id: 26,
			tenant: 'dynamic',
			name_of_video:
				'no one has this graded yet ***This video is informative and will not receive a grade***',
			url_to_video: 'PfwGTMV265E',
			curriculum_level: 1,
			created_at: '2021-06-27T23:48:18.000Z',
			url_to_looped_video: 'PfwGTMV265E',
			number_for_ordering: 6,
			maximum_grade: 7
		},
		{
			id: 29,
			tenant: 'dynamic',
			name_of_video:
				'fake move with john ***This video is informative and will not receive a grade***',
			url_to_video: 'lkjldskjaf',
			curriculum_level: 1,
			created_at: '2021-08-11T23:28:47.000Z',
			url_to_looped_video: 'oijoijdf',
			number_for_ordering: 7,
			maximum_grade: 7
		},
		{
			id: 31,
			tenant: 'dynamic',
			name_of_video:
				'Level 1 test ***This video is informative and will not receive a grade*** AHHHHHHH ***This video is purely informative and will not receive a grade***',
			url_to_video: '',
			curriculum_level: 1,
			created_at: '2021-10-06T02:47:05.000Z',
			url_to_looped_video: '',
			number_for_ordering: 8,
			maximum_grade: 7
		},
		{
			id: 64,
			tenant: 'dynamic',
			name_of_video: 'asdf',
			url_to_video: 'asdf',
			curriculum_level: 2,
			created_at: '2021-12-31T17:20:43.000Z',
			url_to_looped_video: 'asdf',
			number_for_ordering: 1,
			maximum_grade: 3
		},
		{
			id: 65,
			tenant: 'dynamic',
			name_of_video: 'asdff',
			url_to_video: 'asdfdfd',
			curriculum_level: 2,
			created_at: '2021-12-31T17:20:57.000Z',
			url_to_looped_video: 'sdfds',
			number_for_ordering: 2,
			maximum_grade: 3
		},
		{
			id: 66,
			tenant: 'dynamic',
			name_of_video: 'oijfodisj',
			url_to_video: 'oijoij',
			curriculum_level: 2,
			created_at: '2021-12-31T17:21:12.000Z',
			url_to_looped_video: 'oijoijj',
			number_for_ordering: 3,
			maximum_grade: 3
		},
		{
			id: 67,
			tenant: 'dynamic',
			name_of_video: '3fff',
			url_to_video: '3fd',
			curriculum_level: 2,
			created_at: '2021-12-31T17:21:57.000Z',
			url_to_looped_video: 'ffd',
			number_for_ordering: 4,
			maximum_grade: 3
		},
		{
			id: 68,
			tenant: 'dynamic',
			name_of_video: 'new move',
			url_to_video: 'kdslkfjldkj',
			curriculum_level: 4,
			created_at: '2022-04-05T18:03:11.000Z',
			url_to_looped_video: 'ojidlskjdfl',
			number_for_ordering: 3,
			maximum_grade: 3
		},
		{
			id: 28,
			tenant: 'dynamic',
			name_of_video: 'works!!! ***This video is informative and will not receive a grade***',
			url_to_video: 'lkjlkj',
			curriculum_level: 4,
			created_at: '2021-07-09T01:38:24.000Z',
			url_to_looped_video: 'lkjlkjl',
			number_for_ordering: 4,
			maximum_grade: 7
		},
		{
			id: 27,
			tenant: 'dynamic',
			name_of_video: 'asdf ***This video is informative and will not receive a grade***',
			url_to_video: 'fdsad',
			curriculum_level: 5,
			created_at: '2021-07-09T01:34:27.000Z',
			url_to_looped_video: 'fdd',
			number_for_ordering: 5,
			maximum_grade: 7
		},
		{
			id: 23,
			tenant: 'dynamic',
			name_of_video:
				'Stopping your opponent from grabbing your legs with "head position" ***This video is informative and will not receive a grade*** ***This video is purely informative and will not receive a grade*** ***This video is purely informative and will not receive a grade***',
			url_to_video: 'chubewIFlVE',
			curriculum_level: 6,
			created_at: '2021-06-24T18:21:24.000Z',
			url_to_looped_video: 'nug0_kAwJtw',
			number_for_ordering: 1,
			maximum_grade: 0
		},
		{
			id: 21,
			tenant: 'dynamic',
			name_of_video:
				'Double Leg Lift ***This video is informative and will not receive a grade*** ***This video is purely informative and will not receive a grade*** ***This video is purely informative and will not receive a grade*** ***This video is purely informative and will not receive a grade*** ***This video is purely informative and will not receive a grade*** ***This video is purely informative and will not receive a grade*** ***This video is purely informative and will not receive a grade***',
			url_to_video: 'GgAuEc4ASdw',
			curriculum_level: 6,
			created_at: '2021-06-24T18:20:16.000Z',
			url_to_looped_video: 'XKk4Spbnsmg',
			number_for_ordering: 3,
			maximum_grade: 0
		},
		{
			id: 22,
			tenant: 'dynamic',
			name_of_video:
				'Cement Mixer ***This video is informative and will not receive a grade*** ***This video is purely informative and will not receive a grade*** ***This video is purely informative and will not receive a grade***',
			url_to_video: '7IffYx9cqVA',
			curriculum_level: 6,
			created_at: '2021-06-24T18:20:52.000Z',
			url_to_looped_video: '3WnxIws2iN4',
			number_for_ordering: 4,
			maximum_grade: 0
		}
	]);
});

export default router;
