export const Tasks = {
  thisYear: {
    all: 310,
    completed: 30,
  },
  thisWeek: {
    all: 10,
    completed: 8,
  },
  thisMonth: {
    all: 40,
    completed: 32,
  },
  thisDay: {
    all: 2,
    completed: 2,
  },
};
export const DailyTasks = [
  {
    title: "Send benefit review by Sunday",
    due: new Date().toISOString().slice(0, 10),
    type: "Reminder",
    status: "Completed",
    userImg: "https://i.pravatar.cc/40?img=2",
    userName: "George Fields",
  },
  {
    title: "Invite to office meet-up",
    due: new Date().toISOString().slice(0, 10),
    type: "Call",
    status: "Ended",
    userImg: "https://i.pravatar.cc/40?img=3",
    userName: "Rebecca Moore",
  },
  {
    title: "Office meet-up",
    due: new Date().toISOString().slice(0, 10),
    type: "Event",
    status: "Active",
    userImg: "https://i.pravatar.cc/40?img=4",
    userName: "Lindsey Stroud",
  },
  {
    title: "Submit report",
    due: new Date(new Date().setDate(new Date().getDate() - 1))
      .toISOString()
      .slice(0, 10),
    type: "Task",
    status: "Completed",
    userImg: "https://i.pravatar.cc/40?img=5",
    userName: "John Doe",
  },
  {
    title: "Weekly Team Meeting",
    due: new Date(new Date().setDate(new Date().getDate() - 1))
      .toISOString()
      .slice(0, 10),
    type: "Meeting",
    status: "Active",
    userImg: "https://i.pravatar.cc/40?img=6",
    userName: "Jane Smith",
  },
  {
    title: "Client Follow-up",
    due: new Date(new Date().setDate(new Date().getDate() - 1))
      .toISOString()
      .slice(0, 10),
    type: "Call",
    status: "Ended",
    userImg: "https://i.pravatar.cc/40?img=7",
    userName: "Michael Brown",
  },
  {
    title: "Update project roadmap",
    due: new Date(new Date().setDate(new Date().getDate() - 2))
      .toISOString()
      .slice(0, 10),
    type: "Task",
    status: "Active",
    userImg: "https://i.pravatar.cc/40?img=8",
    userName: "Sarah Johnson",
  },
  {
    title: "Design review",
    due: new Date(new Date().setDate(new Date().getDate() - 2))
      .toISOString()
      .slice(0, 10),
    type: "Meeting",
    status: "Completed",
    userImg: "https://i.pravatar.cc/40?img=9",
    userName: "Chris Wilson",
  },
  {
    title: "Launch campaign",
    due: new Date(new Date().setDate(new Date().getDate() - 2))
      .toISOString()
      .slice(0, 10),
    type: "Event",
    status: "Active",
    userImg: "https://i.pravatar.cc/40?img=10",
    userName: "Emily Davis",
  },
];

export const ContactDefault = [
  {
    id: "12jhdf1hjju",
    name: "User 1",
    email: "user1@example.com",
    company: "Udemy",
    role: "Teacher",
    forecast: "75%",
    activity: "23 minutes ago",
  },
  {
    id: "87dfg2kldss",
    name: "User 2",
    email: "user2@example.com",
    company: "Coursera",
    role: "Student",
    forecast: "62%",
    activity: "9 minutes ago",
  },
  {
    id: "ab9fdgqplmn",
    name: "User 3",
    email: "user3@example.com",
    company: "Pluralsight",
    role: "Manager",
    forecast: "89%",
    activity: "47 minutes ago",
  },
  {
    id: "xklowpgf123",
    name: "User 4",
    email: "user4@example.com",
    company: "Udemy",
    role: "Teacher",
    forecast: "91%",
    activity: "12 minutes ago",
  },
  {
    id: "mlw78dfspqr",
    name: "User 5",
    email: "user5@example.com",
    company: "Coursera",
    role: "Student",
    forecast: "67%",
    activity: "56 minutes ago",
  },
  {
    id: "poiu34qwdsa",
    name: "User 6",
    email: "user6@example.com",
    company: "Pluralsight",
    role: "Manager",
    forecast: "78%",
    activity: "3 minutes ago",
  },
  {
    id: "qwert8yuiop",
    name: "User 7",
    email: "user7@example.com",
    company: "Udemy",
    role: "Teacher",
    forecast: "83%",
    activity: "29 minutes ago",
  },
  {
    id: "1234asdfghj",
    name: "User 8",
    email: "user8@example.com",
    company: "Coursera",
    role: "Student",
    forecast: "95%",
    activity: "51 minutes ago",
  },
  {
    id: "zxcvb567890",
    name: "User 9",
    email: "user9@example.com",
    company: "Pluralsight",
    role: "Manager",
    forecast: "64%",
    activity: "17 minutes ago",
  },
  {
    id: "lkjhg098765",
    name: "User 10",
    email: "user10@example.com",
    company: "Udemy",
    role: "Teacher",
    forecast: "72%",
    activity: "41 minutes ago",
  },
];
