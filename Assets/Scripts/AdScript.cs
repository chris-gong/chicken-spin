using UnityEngine;
using UnityEngine.Advertisements;

public class AdScript : MonoBehaviour {
	public TextMesh textMesh;
	public Camera cameraMain;
	// Use this for initialization
	void Start () { 
		//Advertisement.Initialize ("48765", false);

	}
	
	// Update is called once per frame
	void Update () {

		foreach (Touch touch in Input.touches) {

			RaycastHit hit;
			//instead of cameraMain, it could also be Camera.main but since I had
			//to recreate the scene a new camera was made while the old main camera died
			Ray ray = cameraMain.ScreenPointToRay(touch.position);
			if (Physics.Raycast(ray, out hit, 50)){

				if(hit.collider.gameObject == textMesh.GetComponent<Collider>().gameObject && touch.phase == TouchPhase.Began){
				
					if(Advertisement.IsReady()){
					Advertisement.Show(null, new ShowOptions {
						resultCallback = result => {
							Debug.Log(result.ToString());
						}});
					}
						
			}
			}
		}
	}

} 

	