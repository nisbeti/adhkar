/*
 * Morning and evening adhkār, pages 4–7 of the Morning & Evening Adhkār leaflet by UWT.
 * English translations from UWT's Daily Adhkār booklet.
 */
/* Recitations by Mpowa on YouTube. A dhikr's `video` gives its start time in each, e.g. video: { morning: "1:23", evening: "1:40" }. */
const VIDEOS = {
  morning: "2_Ke90xqABU", /* Morning adhkaar/duas/prayers/durood */
  evening: "yY91Pq70Mk4"  /* Evening adhkaar/remembrance/prayers/duas/durood */
};

/* when: "both" | "morning" | "evening".  A dhikr numbered 8–14 has a morning and an evening wording. */
const DHIKR = [
  {
    n: 1, when: "both", source: "Tabarānī", repeat: 1,
    video: { morning: "0:05", evening: "0:02" },
    title_ar: "آية الكرسي", title_en: "Āyat al-Kursī (2:255)",
    ar: ["اللهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ، لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَؤُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ."],
    en: ["Allah, there is no god but He, the Ever Living, the One Who sustains and protects all that exists. Neither drowsiness overtakes Him nor sleep. To Him Alone belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except with His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursī extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great."]
  },
  {
    n: 2, when: "both", source: "Tirmidhī", repeat: 3,
    video: { morning: "1:10", evening: "1:09" },
    title_ar: "سورة الإخلاص", title_en: "Sūrah al-Ikhlāṣ (112)",
    ar: ["قُلْ هُوَ اللهُ أَحَدٌ ۝ اللهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ ۝"],
    en: ["Say, He is Allah, the One, the Self-Sufficient Master, Who has not given birth and was not born, and to Whom no one is equal."]
  },
  {
    n: 2, when: "both", source: "Tirmidhī", repeat: 3,
    video: { morning: "2:05", evening: "2:09" },
    title_ar: "سورة الفلق", title_en: "Sūrah al-Falaq (113)",
    ar: ["قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ ۝ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ ۝"],
    en: ["Say, I seek protection of the Lord of the daybreak, from the evil of what He has created, and from the evil of the darkening night when it settles, and from the evil of the blowers in knots, and from the evil of the envier when he envies."]
  },
  {
    n: 2, when: "both", source: "Tirmidhī", repeat: 3,
    video: { morning: "3:30", evening: "3:27" },
    title_ar: "سورة الناس", title_en: "Sūrah al-Nās (114)",
    ar: ["قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ ۝"],
    en: ["Say, I seek protection of the Lord of mankind, the King of mankind, the God of mankind, from the evil of the whisperer who withdraws, who whispers in the hearts of mankind, whether they be Jinn or people."]
  },
  {
    n: 3, when: "both", source: "Bukhārī", repeat: 1,
    video: { morning: "6:23" },
    title_ar: "سيد الاستغفار", title_en: "The master supplication for forgiveness",
    ar: ["اللَّهُمَّ أَنْتَ رَبِّيْ لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِيْ وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوْءُ بِذَنْبِيْ، فَاغْفِرْ لِيْ، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوْبَ إِلَّا أَنْتَ."],
    en: ["O Allah, You are my Lord. There is no god except You. You have created me, and I am Your slave, and I am under Your covenant and pledge (to fulfil it) to the best of my ability. I seek Your protection from the evil that I have done. I acknowledge the favours that You have bestowed upon me, and I admit my sins. Forgive me, for none forgives sins but You."]
  },
  {
    n: 4, when: "both", source: "Abū Dāwūd", repeat: 1,
    ar: ["اللَّهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوْذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوْذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوْذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ."],
    en: ["O Allah, I seek Your protection from anxiety and grief. I seek Your protection from inability and laziness. I seek Your protection from cowardice and miserliness and I seek Your protection from being overcome by debt and being overpowered by men."]
  },
  {
    n: 5, when: "both", source: "Abū Dāwūd", repeat: 1,
    video: { morning: "12:02", evening: "9:15" },
    ar: ["اللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِيْ دِيْنِيْ وَدُنْيَايَ وَأَهْلِيْ وَمَالِيْ، اللَّهُمَّ اسْتُرْ عَوْرَاتِيْ وَآمِنْ رَوْعَاتِيْ، اللَّهُمَّ احْفَظْنِيْ مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِيْ، وَعَنْ يَمِيْنِيْ، وَعَنْ شِمَالِيْ، وَمِنْ فَوْقِيْ، وَأَعُوْذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِيْ."],
    en: ["O Allah, I ask You for well-being in this world and the next. O Allah, I ask You for forgiveness and well-being in my religion, in my worldly affairs, in my family and in my wealth. O Allah, conceal my faults and calm my fears. O Allah, guard me from in front of me and behind me, from my right, and from my left, and from above me. I seek protection in Your Greatness from being unexpectedly destroyed from beneath me."]
  },
  {
    n: 6, when: "both", source: "Tirmidhī", repeat: 1,
    video: { morning: "12:45", evening: "9:58" },
    ar: ["اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيْكَهُ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا أَنْتَ، أَعُوْذُ بِكَ مِنْ شَرِّ نَفْسِيْ، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَىٰ نَفْسِيْ سُوْءًا، أَوْ أَجُرَّهُ إِلَىٰ مُسْلِمٍ."],
    en: ["O Allah, Knower of the unseen and the seen, Creator of the heavens and the earth, the Lord and Sovereign of everything; I bear witness that there is no god but You. I seek Your protection from the evil of my own self, from the evil of Shaytān and from the evil of polytheism to which he calls, and from inflicting evil on myself, or bringing it upon a Muslim."]
  },
  {
    n: 7, when: "both", source: "Nasā’ī", repeat: 1,
    video: { morning: "14:36" },
    ar: ["يَا حَيُّ يَا قَيُّوْمُ، بِرَحْمَتِكَ أَسْتَغِيْثُ، أَصْلِحْ لِيْ شَأْنِيْ كُلَّهُ، وَلَا تَكِلْنِيْ إِلَىٰ نَفْسِيْ طَرْفَةَ عَيْنٍ."],
    en: ["O the Ever Living, the One Who sustains and protects all that exists; I seek assistance through Your mercy. Rectify all of my affairs and do not entrust me to myself for the blink of an eye."]
  },

  {
    n: 8, when: "morning", source: "Abū Dāwūd", repeat: 1,
    video: { morning: "8:52" },
    ar: ["اللَّهُمَّ مَا أَصْبَحَ بِيْ مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيْكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ."],
    en: ["O Allah, all the favours that I or anyone from Your creation has received in the morning, are from You Alone. You have no partner. To You Alone belong all praise and all thanks."]
  },
  {
    n: 8, when: "evening", source: "Abū Dāwūd", repeat: 1,
    ar: ["اللَّهُمَّ مَا أَمْسَىٰ بِيْ مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيْكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ."],
    en: ["O Allah, all the favours that I or anyone from Your creation has received in the evening, are from You Alone. You have no partner. To You Alone belong all praise and all thanks."]
  },
  {
    n: 9, when: "morning", source: "Nasā’ī", repeat: 1,
    video: { morning: "15:20" },
    ar: ["أَصْبَحْنَا عَلَىٰ فِطْرَةِ الْإِسْلَامِ، وَعَلَىٰ كَلِمَةِ الْإِخْلَاصِ، وَعَلَىٰ دِيْنِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَعَلَىٰ مِلَّةِ أَبِيْنَا إِبْرَاهِيْمَ حَنِيْفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ."],
    en: ["We have entered the morning upon the natural religion of Islam, the word of pure faith (i.e. Shahādah), the religion of our Prophet Muhammad ﷺ and upon the way of our father Ibrāhīm, who turned away from all that is false, having surrendered to Allah, and he was not of the polytheists."]
  },
  {
    n: 9, when: "evening", source: "Nasā’ī", repeat: 1,
    ar: ["أَمْسَيْنَا عَلَىٰ فِطْرَةِ الْإِسْلَامِ، وَعَلَىٰ كَلِمَةِ الْإِخْلَاصِ، وَعَلَىٰ دِيْنِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَعَلَىٰ مِلَّةِ أَبِيْنَا إِبْرَاهِيْمَ حَنِيْفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ."],
    en: ["We have entered the evening upon the natural religion of Islam, the word of pure faith (i.e. Shahādah), the religion of our Prophet Muhammad ﷺ and upon the way of our father Ibrāhīm, who turned away from all that is false, having surrendered to Allah, and he was not of the polytheists."]
  },
  {
    n: 10, when: "morning", source: "Nasā’ī", repeat: 3,
    ar: ["أَصْبَحْتُ أُثْنِيْ عَلَيْكَ حَمْدًا، وَأَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللهُ."],
    en: ["I have entered the morning praising You, and I bear witness that there is no god but Allah."]
  },
  {
    n: 10, when: "evening", source: "Nasā’ī", repeat: 3,
    ar: ["أَمْسَيْتُ أُثْنِيْ عَلَيْكَ حَمْدًا، وَأَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللهُ."],
    en: ["I have entered the evening praising You, and I bear witness that there is no god but Allah."]
  },
  {
    n: 11, when: "morning", source: "Muslim", repeat: 1,
    video: { morning: "5:20" },
    ar: ["أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلهِ وَالْحَمْدُ لِلهِ، لَا إِلَٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِيْ هَٰذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا فِيْ هَٰذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوْذُ بِكَ مِنَ الْكَسَلِ وَسُوْءِ الْكِبَرِ، رَبِّ أَعُوْذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ."],
    en: ["We have entered the morning and at this very time the whole kingdom belongs to Allah. All praise is due to Allah. There is no god but Allah, the One; He has no partner with Him. The entire kingdom belongs solely to Him, to Him is all praise due, and He is All-Powerful over everything. My Lord, I ask You for the good that is in this day and the good that follows it, and I seek Your protection from the evil that is in this day and from the evil that follows it. My Lord, I seek Your protection from laziness and the misery of old age. My Lord, I seek Your protection from the torment of the Hell-fire and the punishment of the grave."]
  },
  {
    n: 11, when: "evening", source: "Muslim", repeat: 1,
    video: { evening: "5:26" },
    ar: ["أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلهِ وَالْحَمْدُ لِلهِ، لَا إِلَٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِيْ هَٰذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا فِيْ هَٰذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوْذُ بِكَ مِنَ الْكَسَلِ وَسُوْءِ الْكِبَرِ، رَبِّ أَعُوْذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ."],
    en: ["We have entered the evening and at this very time the whole kingdom belongs to Allah. All praise is due to Allah. There is no god but Allah, the One; He has no partner with Him. The entire kingdom belongs solely to Him, to Him is all praise due, and He is All-Powerful over everything. My Lord, I ask You for the good that is in this night and the good that follows it, and I seek Your protection from the evil that is in this night and from the evil that follows it. My Lord, I seek Your protection from laziness and the misery of old age. My Lord, I seek Your protection from the torment of the Hell-fire and the punishment of the grave."]
  },
  {
    n: 12, when: "morning", source: "Abū Dāwūd", repeat: 1,
    video: { morning: "14:52" },
    ar: ["أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلهِ رَبِّ الْعَالَمِيْنَ، اللَّهُمَّ إِنِّيْ أَسْأَلُكَ خَيْرَ هَٰذَا الْيَوْمِ، فَتْحَهُ وَنَصْرَهُ وَنُوْرَهُ وَبَرَكَتَهُ وَهُدَاهُ، وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا فِيْهِ وَشَرِّ مَا بَعْدَهُ."],
    en: ["We have entered the morning and at this very time the whole kingdom belongs to Allah, Lord of the Worlds. O Allah, I ask You for the goodness of this day: its victory, its help, its light, and its blessings and guidance. I seek Your protection from the evil that is in it and from the evil that follows it."]
  },
  {
    n: 12, when: "evening", source: "Abū Dāwūd", repeat: 1,
    ar: ["أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلهِ رَبِّ الْعَالَمِيْنَ، اللَّهُمَّ إِنِّيْ أَسْأَلُكَ خَيْرَ هَٰذِهِ اللَّيْلَةِ، فَتْحَهَا وَنَصْرَهَا وَنُوْرَهَا وَبَرَكَتَهَا وَهُدَاهَا، وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا فِيْهَا وَشَرِّ مَا بَعْدَهَا."],
    en: ["We have entered the evening and at this very time the whole kingdom belongs to Allah, Lord of the Worlds. O Allah, I ask You for the goodness of this night: its victory, its help, its light, and its blessings and guidance. I seek Your protection from the evil that is in it and from the evil that follows it."]
  },
  {
    n: 13, when: "morning", source: "Abū Dāwūd", repeat: 4,
    video: { morning: "7:02" },
    ar: ["اللَّهُمَّ إِنِّيْ أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلَائِكَتَكَ وَجَمِيْعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللهُ، لَا إِلَٰهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيْكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُوْلُكَ."],
    en: ["O Allah, I have entered the morning and call upon You, the bearers of Your Throne, Your angels and all creation, to bear witness that surely You are Allah. There is no god but You Alone. You have no partners, and that Muhammad ﷺ is Your slave and Your Messenger."]
  },
  {
    n: 13, when: "evening", source: "Abū Dāwūd", repeat: 4,
    ar: ["اللَّهُمَّ إِنِّيْ أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ وَمَلَائِكَتَكَ وَجَمِيْعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللهُ، لَا إِلَٰهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيْكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُوْلُكَ."],
    en: ["O Allah, I have entered the evening and call upon You, the bearers of Your Throne, Your angels and all creation, to bear witness that surely You are Allah. There is no god but You Alone. You have no partners, and that Muhammad ﷺ is Your slave and Your Messenger."]
  },
  {
    n: 14, when: "morning", source: "Tirmidhī", repeat: 1,
    video: { morning: "6:07" },
    ar: ["اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَإِلَيْكَ النُّشُوْرُ."],
    en: ["O Allah, by You we have entered the morning and by You we enter upon the evening. By You, we live and we die, and to You is the resurrection."]
  },
  {
    n: 14, when: "evening", source: "Tirmidhī", repeat: 1,
    video: { evening: "6:10" },
    ar: ["اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَإِلَيْكَ الْمَصِيْرُ."],
    en: ["O Allah, by You we have entered the evening and by You we enter upon the morning. By You, we live and we die, and to You is the return."]
  },

  {
    n: 15, when: "both", source: "Ahmad", repeat: 3,
    video: { morning: "9:09", evening: "6:22" },
    ar: ["اللَّهُمَّ عَافِنِيْ فِيْ بَدَنِيْ، اللَّهُمَّ عَافِنِيْ فِيْ سَمْعِيْ، اللَّهُمَّ عَافِنِيْ فِيْ بَصَرِيْ، لَا إِلَٰهَ إِلَّا أَنْتَ، اللَّهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوْذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَٰهَ إِلَّا أَنْتَ."],
    en: ["O Allah, grant me well-being in my body. O Allah, grant me well-being in my hearing. O Allah, grant me well-being in my sight. There is no god but You. O Allah, I seek Your protection from disbelief and poverty and I seek Your protection from the punishment of the grave. There is no god but You."]
  },
  {
    n: 16, when: "both", source: "Abū Dāwūd", repeat: 7,
    video: { morning: "10:45", evening: "7:58" },
    ar: ["حَسْبِيَ اللهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيْمِ."],
    en: ["Allah is sufficient for me. There is no god but Him. I have placed my trust in Him only and He is the Lord of the Magnificent Throne."]
  },
  {
    n: 17, when: "both", source: "Tirmidhī", repeat: 3,
    video: { morning: "13:59", evening: "11:11" },
    ar: ["رَضِيْتُ بِاللهِ رَبًّا، وَبِالْإِسْلَامِ دِيْنًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا."],
    en: ["I am pleased with Allah as my Lord, with Islām as my religion and with Muhammad ﷺ as my Prophet."]
  },
  {
    n: 18, when: "both", source: "Tirmidhī", repeat: 3,
    video: { morning: "13:20", evening: "10:32" },
    ar: ["بِسْمِ اللهِ الَّذِيْ لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيْعُ الْعَلِيْمُ."],
    en: ["In the Name of Allah, with whose Name nothing can harm in the earth nor in the sky. He is the All-Hearing and All-Knowing."]
  },
  {
    n: 19, when: "both", source: "Muslim", repeat: 100,
    video: { morning: "15:48" },
    ar: ["سُبْحَانَ اللهِ وَبِحَمْدِهِ."],
    en: ["Allah is free from imperfection, and all praise is due to Him."]
  },
  {
    n: 20, when: "both", source: "Nasā’ī", repeat: 100,
    ar: ["سُبْحَانَ اللهِ، الْحَمْدُ لِلهِ، اللهُ أَكْبَرُ."],
    en: ["Allah is free from imperfection. All praise be to Allah. Allah is the Greatest."]
  },
  {
    n: 21, when: "both", source: "Bukhārī / Nasā’ī", repeat: 100,
    video: { morning: "15:56" },
    ar: ["لَا إِلَٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ."],
    en: ["There is no god but Allah. He is Alone and He has no partner whatsoever. To Him Alone belong all sovereignty and all praise. He is over all things All-Powerful."]
  },
  {
    n: 22, when: "both", source: "Tabarānī", repeat: 10,
    title_ar: "الصلاة على النبي ﷺ", title_en: "Blessings upon the Prophet ﷺ",
    ar: ["اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ."],
    en: ["O Allah, send blessings upon Muhammad and upon the family of Muhammad."]
  },
  {
    n: 23, when: "morning", source: "Tabarānī", repeat: 100,
    video: { morning: "17:02" },
    ar: ["أَسْتَغْفِرُ اللهَ وَأَتُوْبُ إِلَيْهِ."],
    en: ["I seek Allah’s forgiveness and turn to Him in repentance."]
  },
  {
    n: 24, when: "morning", source: "Muslim", repeat: 3,
    video: { morning: "16:12" },
    ar: ["سُبْحَانَ اللهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ."],
    en: ["Allah is free from imperfection and all praise is due to Him, (in ways) as numerous as all He has created, (as vast) as His pleasure, (as limitless) as the weight of His Throne, and (as endless) as the ink of His words."]
  },
  {
    n: 25, when: "evening", source: "Nasā’ī", repeat: 3,
    ar: ["أَعُوْذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ."],
    en: ["I seek protection in Allah’s perfect words from the evil of whatever He has created."]
  }
];
