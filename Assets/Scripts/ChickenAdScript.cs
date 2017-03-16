using UnityEngine;
using System.Collections;
using UnityEngine.Advertisements;
  
public class ChickenAdScript : MonoBehaviour {
	public float timer = 30.0f;
	// Use this for initialization
	void Start () {

		//Advertisement.Initialize("48765", false);
	}
	
	// Update is called once per frame
	void Update () {
	if (timer > 0) {
			timer -= Time.deltaTime;
		}
	if (timer <= 0){
			timer = 30.0f;
			if(Advertisement.IsReady()){
				Advertisement.Show(null, new ShowOptions {
					resultCallback = result => {
						Debug.Log(result.ToString());
					}});
			}
	}
}
}