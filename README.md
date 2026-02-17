# Pollroom 


![Pollroom](https://res.cloudinary.com/dzhczzqwf/image/upload/v1771305693/pollroom-favicon_pcq8ms.png) 

**Create polls, share them anywhere, and watch live results update instantly.**

Live App → **[pollroom.jayyu.in](https://pollroom.jayyu.in/)**  
Repository → **[Poll-Room](https://github.com/jayesh-verma-code/Poll-Room-)**

---
## Try these fun Polls
|Poll|Link|
|----|----|
|🥛 How many glasses of water do you drink a day?|[pollroom.jayyu.in/poll/water](https://pollroom.jayyu.in/poll/6994726da84f6ab8a1366a2e)|
|✨ Which superpower would you pick?|[pollroom.jayyu.in/poll/superpower](https://pollroom.jayyu.in/poll/699471dea84f6ab8a13669f6)|
|☕ Are you a tea person or a coffee person?|[pollroom.jayyu.in/poll/teaorcoffee](https://pollroom.jayyu.in/poll/69947310a84f6ab8a1366a56)|
|😁 Where would you travel if you could go anywhere?|[pollroom.jayyu.in/poll/travel](https://pollroom.jayyu.in/poll/69947146a84f6ab8a13669b4)|

---

##  Tech Stack

* **Backend:** Node.js, Express
* **Frontend:** EJS + Vanilla JS
* **Database:** MongoDB
* **Realtime:** Socket.io

---

##  Features

* **Poll Creation**: Create poll with multiple options
* **Join by link**: Shareable poll link
* **Real-time results**:
  - Live result updates (no refresh)
  - Change vote anytime
  - Remove vote option
* **Persistent**: Polls and votes data is persisted (no loss on refresh and shared link will work later)
* **Deployment**: Render ( live on : *pollroom.jayyu.in*)

---

##  Fairness / Anti-Abuse Mechanisms

**1. Device Fingerprint Hash**

* Hash of IP + UserAgent stored per vote
* Prevents repeat voting from same device

**2. Backend Vote Validation**

* Database check ensures one active vote per device
* Blocks rapid duplicate or API spam attempts

---

##  Known Limitations

|Limitation|Solution|
|----------|--------|
|Users can vote from multiple devices| Can solved **by OAuth**, wanted to implement but can't due to time constraint|
|Bot Detection|Implementing CAPTCHA protection|
|Single server instance| Horizontal scaling|
|UX/UI|Wanted to work more frontend, do checkout the [Figma design](https://www.figma.com/design/6BnAePSAm7yLCA7xeV1rBl/Poll-Room-Architecture?node-id=4-19&t=Arp8ceZYSS9AcsvL-0)|


---

##  Edge Cases Handled

* Invalid poll link
* Duplicate voting attempts
* Vote change logic
* Vote removal
* Empty or invalid inputs

---

##  Installation

```bash
git clone Poll-Room-
cd Poll-Room-
npm install
cp .env.example .env
npm run dev
```

---

##  Environment Variables

`.env`

```
PORT=3000
MONGO_URI=your_mongodb_connection
```

---

##  Deployment

* Hosted on **Render**
* Database on **MongoDB Atlas**

---

## Future Improvements

* CAPTCHA anti-bot protection
* Poll expiration timer
* User authentication system (**OAuth, OTP Verification**)
* Result charts & analytics 
* Horizontal scaling

---

##  Author

**👋 Jayesh Verma | Made with 💓 & ☕**

---

